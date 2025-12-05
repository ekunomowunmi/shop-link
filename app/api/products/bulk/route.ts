import { NextRequest, NextResponse } from 'next/server';
import { getUserFromRequest } from '@/lib/api-helpers';
import { db } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const user = getUserFromRequest(request);
    if (!user || user.role !== 'vendor') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const { products } = await request.json();

    if (!Array.isArray(products) || products.length === 0) {
      return NextResponse.json(
        { error: 'Products array is required' },
        { status: 400 }
      );
    }

    const validatedProducts = products.map((p: any) => ({
      vendorId: user.id,
      name: p.name,
      image: p.image,
      whatsappLink: p.whatsappLink,
      instagramLink: p.instagramLink,
      categories: Array.isArray(p.categories) ? p.categories : (p.category ? [p.category] : ['Uncategorized']),
    }));

    const createdProducts = db.products.createMany(validatedProducts);

    return NextResponse.json({ products: createdProducts }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

