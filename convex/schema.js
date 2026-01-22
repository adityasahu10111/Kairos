import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    // Users table
    users: defineTable({
        // Clerk auth
        clerkId: v.string(),
        email: v.string(),
        name: v.string(),
        imageUrl: v.optional(v.string()),

        // Onboarding
        hasCompletedOnboarding: v.boolean(),

        // Attendee preferences (from onboarding)
        location: v.optional(
            v.object({
                city: v.string(),
                state: v.optional(v.string()), // Added state field
                country: v.string(),
                coordinates: v.optional(
                    v.object({
                        lat: v.number(),
                        lng: v.number(),
                    })
                ),
            })
        ),
        interests: v.optional(v.array(v.string())), // Min 3 categories

        // Organizer profile
        organizerProfile: v.optional(
            v.object({
                bio: v.optional(v.string()),
                website: v.optional(v.string()),
                socialLinks: v.optional(
                    v.object({
                        twitter: v.optional(v.string()),
                        instagram: v.optional(v.string()),
                        linkedin: v.optional(v.string()),
                    })
                ),
            })
        ),

        // Organizer tracking (Clerk Billing handles subscription)
        freeEventsCreated: v.number(), // Track free event limit (1 free)

        // Timestamps
        createdAt: v.number(),
        updatedAt: v.number(),
    })
        .index("by_clerk_id", ["clerkId"])
        .index("by_email", ["email"])
        .searchIndex("search_name", { searchField: "name" }),

    
});