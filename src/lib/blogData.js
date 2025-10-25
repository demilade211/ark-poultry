export const blogPosts = [
  {
    id: 1,
    slug: 'future-sustainable-farming',
    title: 'The Benefits of Free-Range Chicken Farming',
    excerpt: 'Discover how free-range farming practices improve chicken health, egg quality, and environmental sustainability.',
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
  },
  {
    id: 2,
    slug: 'smart-farming-technology',
    title: 'Seasonal Recipe: Farm Fresh Egg Frittata',
    excerpt: 'Try this delicious recipe using our farm-fresh eggs and seasonal vegetables for a nutritious breakfast option.',
    content: `
      <p>There's nothing quite like starting your day with a hearty, nutritious breakfast made with farm-fresh ingredients. This frittata recipe showcases the superior quality of our free-range eggs combined with seasonal vegetables.</p>

      <h2>Ingredients</h2>
      <ul>
        <li>8 large farm-fresh eggs</li>
        <li>1/4 cup milk</li>
        <li>1 cup seasonal vegetables (bell peppers, spinach, tomatoes)</li>
        <li>1/2 cup cheese of your choice</li>
        <li>Salt and pepper to taste</li>
        <li>2 tablespoons olive oil</li>
      </ul>

      <h2>Instructions</h2>
      <p>Preheat your oven to 375°F. In a large oven-safe skillet, heat olive oil over medium heat. Add your chopped vegetables and sauté until tender.</p>
      
      <p>In a bowl, whisk together the eggs, milk, salt, and pepper. Pour the egg mixture over the vegetables in the skillet. Cook for 3-4 minutes without stirring, until the edges begin to set.</p>

      <p>Sprinkle cheese on top and transfer the skillet to the oven. Bake for 15-20 minutes until the frittata is set and golden on top.</p>

      <h2>Why Farm-Fresh Eggs Make a Difference</h2>
      <p>The quality of your eggs directly impacts the taste and nutritional value of your frittata. Our free-range eggs have richer, more vibrant yolks and provide superior flavor and nutrition.</p>
    `,
    image: '/images/img6.jpg',
    date: 'June 2, 2023',
    author: 'Sarah Johnson',
    category: 'Recipes',
    tags: ['Recipe', 'Eggs', 'Breakfast', 'Healthy'],
  },
  {
    id: 3,
    slug: 'organic-farming-benefits-challenges',
    title: 'Our New Organic Feed Production Facility',
    excerpt: 'We\'re excited to announce the opening of our new organic feed production facility to support our sustainable farming practices.',
    content: `
      <p>We're thrilled to announce a major milestone in our commitment to sustainable and organic farming: the opening of our new organic feed production facility!</p>

      <h2>Why We Built This Facility</h2>
      <p>Control over our feed supply chain has always been important to us. By producing our own organic feed, we can ensure the highest quality nutrition for our chickens while maintaining our commitment to organic and sustainable practices.</p>

      <h2>What Makes Our Feed Special</h2>
      <ul>
        <li>100% organic ingredients, certified by recognized organizations</li>
        <li>No GMOs or synthetic additives</li>
        <li>Locally sourced grains when possible</li>
        <li>Custom nutritional formulations for different life stages</li>
      </ul>

      <h2>Environmental Benefits</h2>
      <p>Our new facility incorporates sustainable practices including solar power, water recycling systems, and minimal waste production. We're reducing our carbon footprint while improving feed quality.</p>

      <h2>Impact on Our Products</h2>
      <p>This investment means even better quality eggs and poultry for our customers. The superior nutrition translates directly to healthier chickens and more nutritious products.</p>
    `,
    image: '/images/img7.jpg',
    date: 'July 10, 2023',
    author: 'Michael Brown',
    category: 'News & Updates',
    tags: ['Organic', 'Facility', 'Sustainability', 'Feed'],
  },
];

export function getBlogPostBySlug(slug) {
  return blogPosts.find(post => post.slug === slug);
}

export function getAllBlogSlugs() {
  return blogPosts.map(post => post.slug);
}