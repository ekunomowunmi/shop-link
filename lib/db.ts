// Temporary in-memory storage - replace with your backend API calls
import bcrypt from 'bcryptjs';

export interface User {
  id: string;
  email: string;
  password: string;
  role: 'vendor' | 'customer';
  name: string;
  createdAt: string;
}

export interface Category {
  id: string;
  name: string;
}

export interface Product {
  id: string;
  vendorId: string;
  name: string;
  image: string;
  whatsappLink?: string;
  instagramLink?: string;
  categories: string[]; // Array of category names
  createdAt: string;
  updatedAt: string;
}

// Predefined categories
export const CATEGORIES: Category[] = [
  { id: '1', name: 'Fashion' },
  { id: '2', name: 'Electronics' },
  { id: '3', name: 'Home & Decor' },
  { id: '4', name: 'Beauty & Skincare' },
  { id: '5', name: 'Sports & Fitness' },
  { id: '6', name: 'Books & Media' },
  { id: '7', name: 'Food & Beverages' },
  { id: '8', name: 'Toys & Games' },
  { id: '9', name: 'Health & Wellness' },
  { id: '10', name: 'Automotive' },
];

// In-memory storage arrays
// NOTE: Data is stored in memory and persists during the server session.
// Data will be lost when the server restarts. This is temporary until you connect your backend.
// To clear data: restart the Next.js dev server
const users: User[] = [];
const products: Product[] = [];

// Seed data - populate with sample vendors and products
function seedData() {
  if (users.length > 0) return; // Already seeded

  const now = new Date().toISOString();
  
  // Create vendors
  // Hash password for all vendors (password: password123)
  const hashedPassword = bcrypt.hashSync('password123', 10);

  const vendor1: User = {
    id: 'vendor1',
    email: 'fashion@example.com',
    password: hashedPassword,
    role: 'vendor',
    name: 'Fashion Boutique',
    createdAt: now,
  };

  const vendor2: User = {
    id: 'vendor2',
    email: 'electronics@example.com',
    password: hashedPassword,
    role: 'vendor',
    name: 'Tech Store',
    createdAt: now,
  };

  const vendor3: User = {
    id: 'vendor3',
    email: 'home@example.com',
    password: hashedPassword,
    role: 'vendor',
    name: 'Home Decor Co',
    createdAt: now,
  };

  const vendor4: User = {
    id: 'vendor4',
    email: 'beauty@example.com',
    password: hashedPassword,
    role: 'vendor',
    name: 'Beauty Essentials',
    createdAt: now,
  };

  users.push(vendor1, vendor2, vendor3, vendor4);

  // Create products for vendor1 (Fashion Boutique)
  products.push(
    {
      id: 'prod1',
      vendorId: vendor1.id,
      name: 'Designer Leather Jacket',
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop',
      whatsappLink: 'https://wa.me/+2349123205081',
      instagramLink: 'https://instagram.com/fashionboutique',
      categories: ['Fashion'],
      createdAt: now,
      updatedAt: now,
    },
    {
      id: 'prod2',
      vendorId: vendor1.id,
      name: 'Vintage Denim Jeans',
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop',
      whatsappLink: 'https://wa.me/08085035143',
      instagramLink: 'https://instagram.com/fashionboutique',
      categories: ['Fashion'],
      createdAt: now,
      updatedAt: now,
    },
    {
      id: 'prod3',
      vendorId: vendor1.id,
      name: 'Silk Scarf Collections',
      image: 'https://unsplash.com/photos/three-gray-green-and-white-scarf-on-top-of-table-CNjfgzoY8JU?w=500&h=500&fit=crop',
      whatsappLink: 'https://wa.me/08085035143',
      categories: ['Fashion'],
      createdAt: now,
      updatedAt: now,
    }
  );

  // Create products for vendor2 (Tech Store)
  products.push(
    {
      id: 'prod4',
      vendorId: vendor2.id,
      name: 'Wireless Bluetooth Headphones',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
      whatsappLink: 'https://wa.me/2345678901',
      instagramLink: 'https://instagram.com/techstore',
      categories: ['Electronics'],
      createdAt: now,
      updatedAt: now,
    },
    {
      id: 'prod5',
      vendorId: vendor2.id,
      name: 'Smart Watch Pro',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
      whatsappLink: 'https://wa.me/2345678901',
      instagramLink: 'https://instagram.com/techstore',
      categories: ['Electronics', 'Sports & Fitness'],
      createdAt: now,
      updatedAt: now,
    },
    {
      id: 'prod6',
      vendorId: vendor2.id,
      name: 'Portable Power Bank',
      image: 'https://images.unsplash.com/photo-1609091839311-d5365fcc91c1?w=500&h=500&fit=crop',
      whatsappLink: 'https://wa.me/2345678901',
      categories: ['Electronics'],
      createdAt: now,
      updatedAt: now,
    },
    {
      id: 'prod7',
      vendorId: vendor2.id,
      name: 'USB-C Charging Cable',
      image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500&h=500&fit=crop',
      whatsappLink: 'https://wa.me/2345678901',
      categories: ['Electronics'],
      createdAt: now,
      updatedAt: now,
    }
  );

  // Create products for vendor3 (Home Decor Co)
  products.push(
    {
      id: 'prod8',
      vendorId: vendor3.id,
      name: 'Modern Floor Lamp',
      image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&h=500&fit=crop',
      whatsappLink: 'https://wa.me/3456789012',
      instagramLink: 'https://instagram.com/homedecor',
      categories: ['Home & Decor'],
      createdAt: now,
      updatedAt: now,
    },
    {
      id: 'prod9',
      vendorId: vendor3.id,
      name: 'Decorative Throw Pillows',
      image: 'https://images.unsplash.com/photo-1584100936595-1b7dfa4a584e?w=500&h=500&fit=crop',
      whatsappLink: 'https://wa.me/3456789012',
      instagramLink: 'https://instagram.com/homedecor',
      categories: ['Home & Decor'],
      createdAt: now,
      updatedAt: now,
    },
    {
      id: 'prod10',
      vendorId: vendor3.id,
      name: 'Ceramic Plant Pot Set',
      image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&h=500&fit=crop',
      whatsappLink: 'https://wa.me/3456789012',
      categories: ['Home & Decor'],
      createdAt: now,
      updatedAt: now,
    }
  );

  // Create products for vendor4 (Beauty Essentials)
  products.push(
    {
      id: 'prod11',
      vendorId: vendor4.id,
      name: 'Organic Face Serum',
      image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500&h=500&fit=crop',
      whatsappLink: 'https://wa.me/4567890123',
      instagramLink: 'https://instagram.com/beautyessentials',
      categories: ['Beauty & Skincare', 'Health & Wellness'],
      createdAt: now,
      updatedAt: now,
    },
    {
      id: 'prod12',
      vendorId: vendor4.id,
      name: 'Luxury Lipstick Set',
      image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500&h=500&fit=crop',
      whatsappLink: 'https://wa.me/4567890123',
      instagramLink: 'https://instagram.com/beautyessentials',
      categories: ['Beauty & Skincare'],
      createdAt: now,
      updatedAt: now,
    },
    {
      id: 'prod13',
      vendorId: vendor4.id,
      name: 'Natural Body Lotion',
      image: 'https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=500&h=500&fit=crop',
      whatsappLink: 'https://wa.me/4567890123',
      categories: ['Beauty & Skincare', 'Health & Wellness'],
      createdAt: now,
      updatedAt: now,
    },
    {
      id: 'prod14',
      vendorId: vendor4.id,
      name: 'Perfume Collection',
      image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&h=500&fit=crop',
      whatsappLink: 'https://wa.me/4567890123',
      instagramLink: 'https://instagram.com/beautyessentials',
      categories: ['Beauty & Skincare'],
      createdAt: now,
      updatedAt: now,
    }
  );
}

// Initialize seed data
seedData();

export const db = {
  users: {
    getAll: (): User[] => users,
    getById: (id: string): User | undefined => {
      return users.find(u => u.id === id);
    },
    getByEmail: (email: string): User | undefined => {
      return users.find(u => u.email === email);
    },
    create: (user: Omit<User, 'id' | 'createdAt'>): User => {
      const newUser: User = {
        ...user,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
      };
      users.push(newUser);
      return newUser;
    },
    update: (id: string, updates: Partial<User>): User | null => {
      const index = users.findIndex(u => u.id === id);
      if (index === -1) return null;
      users[index] = { ...users[index], ...updates };
      return users[index];
    },
  },
  products: {
    getAll: (): Product[] => products,
    getById: (id: string): Product | undefined => {
      return products.find(p => p.id === id);
    },
    getByVendorId: (vendorId: string): Product[] => {
      return products.filter(p => p.vendorId === vendorId);
    },
    getByCategory: (category: string): Product[] => {
      return products.filter(p => p.categories.includes(category));
    },
    create: (product: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>): Product => {
      const newProduct: Product = {
        ...product,
        id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      products.push(newProduct);
      return newProduct;
    },
    createMany: (newProducts: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>[]): Product[] => {
      const now = new Date().toISOString();
      const createdProducts: Product[] = newProducts.map((product, index) => ({
        ...product,
        id: Date.now().toString() + index + Math.random().toString(36).substr(2, 9),
        createdAt: now,
        updatedAt: now,
      }));
      products.push(...createdProducts);
      return createdProducts;
    },
    update: (id: string, updates: Partial<Omit<Product, 'id' | 'createdAt'>>): Product | null => {
      const index = products.findIndex(p => p.id === id);
      if (index === -1) return null;
      products[index] = { ...products[index], ...updates, updatedAt: new Date().toISOString() };
      return products[index];
    },
    delete: (id: string): boolean => {
      const index = products.findIndex(p => p.id === id);
      if (index === -1) return false;
      products.splice(index, 1);
      return true;
    },
    getCategories: (): string[] => {
      const categories = new Set<string>();
      products.forEach(p => {
        p.categories.forEach(cat => categories.add(cat));
      });
      return Array.from(categories).sort();
    },
  },
};

