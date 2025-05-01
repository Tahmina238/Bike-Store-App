"use client";

const ContactPage = () => {
  return (
    <div>
      <main className="max-w-4xl mx-auto p-6 min-h-screen">
        <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
        <p className="text-center text-gray-600 mb-10">
          We&apos;d love to hear from you. Please fill out the form below and
          we&apos;ll get back to you shortly.
        </p>

        <form className="space-y-6 bg-base-100 p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
              required
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="input input-bordered w-full"
            required
          />
          <textarea
            placeholder="Your Message"
            className="textarea textarea-bordered w-full"
            rows={5}
            required
          ></textarea>
          <button type="submit" className="btn btn-primary w-full md:w-auto">
            Send Message
          </button>
        </form>
      </main>
    </div>
  );
};

export default ContactPage;
