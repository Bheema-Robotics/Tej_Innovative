'use client';

export default function LiveDemo() {
  return (
    <section className="py-20 px-6 bg-white text-gray-900 text-center">
      <h2 className="text-4xl font-bold mb-6">See Tej in Action</h2>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-10">
        Watch how Tej transforms order-taking efficiency in drive-throughs, self-service kiosks, 
        and mobile ordering.
      </p>

      {/* Embedded Video Demo */}
      <div className="relative w-full max-w-4xl mx-auto mb-12">
        <iframe
          className="w-full h-64 md:h-96 rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Tej Demo"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      {/* Customer Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Testimonial 1 */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <p className="italic text-gray-700">
            "Tej revolutionized our drive-through efficiency. Order accuracy and speed have 
            improved dramatically!"
          </p>
          <h3 className="mt-4 font-semibold text-blue-600">- Sarah Thompson, QSR Manager</h3>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <p className="italic text-gray-700">
            "Our self-order kiosks now handle peak hours seamlessly thanks to Tej's voice 
            ordering and AI recommendations."
          </p>
          <h3 className="mt-4 font-semibold text-green-600">- Michael Lee, Franchise Owner</h3>
        </div>

        {/* Testimonial 3 */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <p className="italic text-gray-700">
            "Customers love the convenience of Tej. It's intuitive, fast, and makes our 
            restaurant stand out!"
          </p>
          <h3 className="mt-4 font-semibold text-red-600">- Jessica Patel, Restaurant Owner</h3>
        </div>
      </div>
    </section>
  );
}
