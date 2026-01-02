import { db } from "./db";
import {
  products,
  contacts,
  type InsertProduct,
  type InsertContact,
  type Product,
  type Contact
} from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  getProducts(): Promise<Product[]>;
  getProduct(id: number): Promise<Product | undefined>;
  createContact(contact: InsertContact): Promise<Contact>;
  seedProducts(): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async getProducts(): Promise<Product[]> {
    return await db.select().from(products);
  }

  async getProduct(id: number): Promise<Product | undefined> {
    const [product] = await db.select().from(products).where(eq(products.id, id));
    return product;
  }

  async createContact(contact: InsertContact): Promise<Contact> {
    const [newContact] = await db.insert(contacts).values(contact).returning();
    return newContact;
  }

  async seedProducts(): Promise<void> {
    const existing = await this.getProducts();
    if (existing.length === 0) {
      await db.insert(products).values([
        {
          title: "Technical Analysis Masterclass",
          description: "Complete guide to chart patterns and indicators.",
          price: 49.99,
          category: "book",
          imageUrl: "https://images.unsplash.com/photo-1611974765270-ca1258634369?auto=format&fit=crop&q=80&w=800",
        },
        {
          title: "Forex Trading Strategies",
          description: "Proven strategies for the currency markets.",
          price: 39.99,
          category: "book",
          imageUrl: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&q=80&w=800",
        },
        {
          title: "Risk Management Calculator",
          description: "Essential tool for position sizing and risk control.",
          price: 19.99,
          category: "tool",
          imageUrl: "https://images.unsplash.com/photo-1611974765270-ca1258634369?auto=format&fit=crop&q=80&w=800",
        },
        {
          title: "Market Sentiment Indicator",
          description: "Gauge the mood of the market in real-time.",
          price: 29.99,
          category: "tool",
          imageUrl: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800",
        }
      ]);
    }
  }
}

export const storage = new DatabaseStorage();
