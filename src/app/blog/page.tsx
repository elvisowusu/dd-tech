'"use client";';
import React from "react";
import Link from "next/link";
import { blogPosts } from "@/lib/data/blogPostData";
import Image from "next/image";
import PageHero from "../components/reusable/page-hero";

export default function Page() {
  return (
    <>
      <PageHero 
        title="Blog"
        backgroundImage="/images/blog/blog-hero.jpg"
        height="h-[400px]"
        overlayOpacity=""
      />
      <section className="py-16 px-4 sm:px-8 lg:px-16 bg-gray-50" id="blog">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
            Latest Stories
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition duration-300"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {post.description}
                  </p>
                  <Link
                    href={post.link}
                    target="_blank"
                    className="text-blue-600 font-medium hover:underline"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
