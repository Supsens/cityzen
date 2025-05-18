// src/components/Testimonials.jsx
const testimonials = [
    {
      name: "Ravi K.",
      quote: "This platform helped me get a broken streetlight fixed within days!",
    },
    {
      name: "Meera S.",
      quote: "I love seeing my complaint’s status update in real time.",
    },
    {
      name: "Arjun P.",
      quote: "Very user-friendly and efficient. Highly recommended!",
    },
  ];
  
  export default function Testimonials() {
    return (
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
          <div className="space-y-8 max-w-3xl mx-auto">
            {testimonials.map((t, i) => (
              <blockquote
                key={i}
                className="bg-white p-6 rounded-lg shadow flex flex-col items-center"
              >
                <p className="italic text-gray-700 mb-4">“{t.quote}”</p>
                <cite className="font-semibold text-gray-900">— {t.name}</cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    );
  }
  