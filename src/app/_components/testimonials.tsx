export const Testimonials = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg">
            <p className="text-gray-700 mb-4">&quot;This product exceeded my expectations. It&apos;s intuitive and has greatly improved my workflow. Highly recommend!&quot;</p>
            <p className="font-bold text-gray-800">- John Doe</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <p className="text-gray-700 mb-4">&quot;I&apos;ve tried many similar tools but this one stands out. The customer support is also top-notch. Love it!&quot;</p>
            <p className="font-bold text-gray-800">- Jane Smith</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <p className="text-gray-700 mb-4">&quot;Since switching to this solution, our team&apos;s productivity has skyrocketed. It&apos;s been a game-changer for us.&quot;</p>
            <p className="font-bold text-gray-800">- Mike Johnson</p>
          </div>
        </div>
      </div>
    </section>
  );
};