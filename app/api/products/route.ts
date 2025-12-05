import { NextRequest, NextResponse } from 'next/server';
import { getUserFromRequest } from '@/lib/api-helpers';
import { db } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const user = getUserFromRequest(request);
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const category = request.nextUrl.searchParams.get('category');
    
    if (user.role === 'vendor') {
      const products = db.products.getByVendorId(user.id);
      return NextResponse.json({ products });
    } else {
      const products = category 
        ? db.products.getByCategory(category)
        : db.products.getAll();
      return NextResponse.json({ products });
    }
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const user = getUserFromRequest(request);
    if (!user || user.role !== 'vendor') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const { name, image, whatsappLink, instagramLink, categories } = await request.json();

    if (!name || !image || !categories || !Array.isArray(categories) || categories.length === 0) {
      return NextResponse.json(
        { error: 'Name, image, and at least one category are required' },
        { status: 400 }
      );
    }

    const product = db.products.create({
      vendorId: user.id,
      name,
      image,
      whatsappLink,
      instagramLink,
      categories,
    });

    return NextResponse.json({ product }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

