import React from 'react';
import Link from 'next/link';
import { Calendar, MessageCircleMore, User, Tag, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';

// This would come from your blog data or API based on the slug
const blogPost = {
  id: 1,
  title: 'The Benefits of Free-Range Chicken Farming',
  content: `
    <p>Free-range chicken farming has gained significant popularity in recent years, and for good reason. This farming practice offers numerous benefits for the chickens, the environment, and ultimately the consumers who enjoy high-quality poultry products.</p>

    <h2>What is Free-Range Farming?</h2>
    <p>Free-range farming allows chickens to roam freely outdoors for at least part of the day, rather than being confined to cages or cramped indoor spaces. This approach to poultry farming prioritizes animal welfare and natural behaviors.</p>

    <h2>Health Benefits for Chickens</h2>
    <p>When chickens have access to outdoor spaces, they can engage in natural behaviors such as foraging, dust bathing, and pecking. This leads to:</p>
    <ul>
      <li>Improved physical health and stronger immune systems</li>
      <li>Better bone density from increased movement</li>
      <li>Reduced stress levels and behavioral problems</li>
      <li>Access to natural sources of vitamins and minerals</li>
    </ul>

    <h2>Superior Egg Quality</h2>
    <p>Free-range chickens produce eggs that are nutritionally superior to those from caged hens. Studies have shown that free-range eggs contain:</p>
    <ul>
      <li>Higher levels of Omega-3 fatty acids</li>
      <li>More vitamin A, E, and D</li>
      <li>Better flavor and richer yolk color</li>
      <li>Lower cholesterol content</li>
    </ul>

    <h2>Environmental Sustainability</h2>
    <p>Free-range farming practices contribute to environmental sustainability in several ways:</p>
    <ul>
      <li>Natural pest control as chickens forage for insects</li>
      <li>Improved soil health through natural fertilization</li>
      <li>Reduced need for chemical inputs and medications</li>
      <li>Lower carbon footprint compared to intensive farming</li>
    </ul>

    <h2>Consumer Benefits</h2>
    <p>Consumers who choose free-range poultry products can feel confident that they are supporting ethical farming practices while enjoying superior quality food. The taste difference is noticeable, and the health benefits make it a worthwhile investment.</p>

    <h2>Conclusion</h2>
    <p>Free-range chicken farming represents a return to more natural and sustainable agricultural practices. While it may cost slightly more, the benefits for animal welfare, environmental health, and product quality make it an excellent choice for conscientious consumers and responsible farmers alike.</p>
  `,
  image: '/images/img2.jpg',
  date: 'May 15, 2023',
  author: 'John Smith',
  category: 'Farming Practices',
  tags: ['Free-Range', 'Sustainability', 'Animal Welfare', 'Organic'],
};

const relatedPosts = [
  {
    id: 2,
    title: 'Seasonal Recipe: Farm Fresh Egg Frittata',
    image: '/images/img6.jpg',
    date: 'June 2, 2023',
    link: '/blog/seasonal-recipe-egg-frittata',
  },
  {
    id: 3,
    title: 'Our New Organic Feed Production Facility',
    image: '/images/img7.jpg',
    date: 'July 10, 2023',
    link: '/blog/organic-feed-facility',
  },
];

const BlogPostPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className="relative h-[300px] md:h-[400px] bg-cover bg-center" 
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.733), rgba(0, 0, 0, 0.733)), url(/images/img8.jpg)'
        }}
      >
        <div className="absolute p-4 md:p-12 inset-0 flex items-center">
          <div className="container mx-auto">
            <div className="text-left text-white">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">Blog Post</h1>
              <span className="flex items-center gap-2 font-semibold text-xl md:text-2xl">
                <Link href="/" className="text-[#d57315] hover:underline">
                  Home
                </Link>
                <span className="mx-2">/</span>
                <Link href="/#blog" className="text-[#d57315] hover:underline">
                  Blog
                </Link>
                <span className="mx-2">/</span>
                <p className="text-white">
                  Post
                </p>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Article */}
          <article className="lg:col-span-2">
            {/* Featured Image */}
            <img 
              src={blogPost.image} 
              alt={blogPost.title} 
              className="w-full h-[400px] object-cover mb-8"
            />

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6 pb-6 border-b">
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-[#d57315]" />
                <span>{blogPost.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <User size={16} className="text-[#d57315]" />
                <span>{blogPost.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag size={16} className="text-[#d57315]" />
                <span>{blogPost.category}</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircleMore size={16} className="text-[#d57315]" />
                <span>0 Comments</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              {blogPost.title}
            </h1>

            {/* Content */}
            <div 
              className="prose prose-lg text-gray-700 max-w-none mb-8"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
              style={{
                lineHeight: '1.8',
              }}
            />

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-3 mb-8 pb-8 border-b">
              <span className="font-semibold text-gray-800">Tags:</span>
              {blogPost.tags.map((tag, index) => (
                <Link
                  key={index}
                  href={`/blog?tag=${tag.toLowerCase()}`}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded hover:bg-[#d57315] hover:text-white transition-colors text-sm"
                >
                  {tag}
                </Link>
              ))}
            </div>

            {/* Share Section */}
            <div className="flex items-center gap-4 mb-12">
              <span className="font-semibold text-gray-800 flex items-center gap-2">
                <Share2 size={20} className="text-[#d57315]" />
                Share:
              </span>
              <div className="flex gap-3">
                <button className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                  <Facebook size={20} />
                </button>
                <button className="p-2 bg-sky-500 text-white rounded hover:bg-sky-600 transition-colors">
                  <Twitter size={20} />
                </button>
                <button className="p-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition-colors">
                  <Linkedin size={20} />
                </button>
              </div>
            </div>

            {/* Author Bio */}
            <div className="bg-gray-50 p-6">
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center">
                  <User size={40} className="text-gray-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    About {blogPost.author}
                  </h3>
                  <p className="text-gray-600">
                    Agricultural expert with over 15 years of experience in sustainable farming practices and poultry management. Passionate about sharing knowledge to help farmers adopt more ethical and efficient farming methods.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            {/* Search */}
            <div className="bg-white border border-gray-200 p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Search</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search posts..."
                  className="w-full px-4 py-2 border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#d57315]"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#d57315]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white border border-gray-200 p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Categories</h3>
              <ul className="space-y-2">
                {['Farming Practices', 'Recipes', 'Sustainability', 'News & Updates', 'Animal Welfare'].map((category, index) => (
                  <li key={index}>
                    <Link
                      href={`/blog?category=${category.toLowerCase()}`}
                      className="flex items-center justify-between text-gray-700 hover:text-[#d57315] transition-colors py-2"
                    >
                      <span>{category}</span>
                      <span className="text-sm text-gray-500">(5)</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Related Posts */}
            <div className="bg-white border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Posts</h3>
              <div className="space-y-4">
                {relatedPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={post.link}
                    className="flex gap-3 group"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 group-hover:text-[#d57315] transition-colors mb-1 line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="text-sm text-gray-500">{post.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;