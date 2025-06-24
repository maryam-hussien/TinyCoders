import { useState } from "react";
import emailjs from "@emailjs/browser";
import CustomButton from "../../components/CustomButton";

const FifthSec = () => {
  const img =
    "https://res.cloudinary.com/drxaf5tun/image/upload/v1750791885/contact2-fotor-enhance-2025062422423_waazjx.jpg";

  const [formType, setFormType] = useState("inquiry");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    childName: "",
    levelNumber: "",
    message: "",
  });
  const [honeypot, setHoneypot] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (honeypot) return;

    if (formType === "unlock") {
      const waMessage = `Hi, I'd like to unlock a level.\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nLevel: ${formData.levelNumber}\n\n(InstaPay Screenshot Attached)`;
      const encoded = encodeURIComponent(waMessage);
      window.open(`https://wa.me/201097315496?text=${encoded}`, "_blank");
      return;
    }

    emailjs
      .send(
        "service_hap0b0i",
        "template_f7j1cbg",
        {
          ...formData,
          time: new Date().toLocaleString(),
        },
        "sqHCie47JoT35oVPU"
      )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          childName: "",
          levelNumber: "",
          message: "",
        });
      })
      .catch((error) => console.error("Error sending email:", error));
  };

  return (
    <div id="contact-us">
      <div
        className="relative w-full py-20 bg-cover bg-center sourGummyFont"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="absolute inset-0 bg-black opacity-30 z-0" />
        <div className="relative z-10 max-w-3xl mx-auto px-5 text-white text-center">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg mb-8 mt-3">We’d love to hear from you!</p>

          {/* 🔁 Horizontal Toggle Bar Using CustomButton */}
          <div className="flex justify-center mb-6 gap-2 bg-white p-1 rounded-full shadow-inner w-fit mx-auto">
   <CustomButton
  type="button"
  text="Inquiry"
  onClick={() => setFormType("inquiry")}
  style={{
    backgroundColor: formType === "inquiry" ? "var(--popy)" : "white",
    color: formType === "inquiry" ? "white" : "black",
  }}
  className="px-6 py-2 rounded-full transition font-medium"
/>

<CustomButton
  type="button"
  text="Unlock Level"
  onClick={() => setFormType("unlock")}
  style={{
    backgroundColor: formType === "unlock" ? "var(--popy)" : "white",
    color: formType === "unlock" ? "white" : "black",
  }}
  className="px-6 py-2 rounded-full transition font-medium"
/>


          </div>

          {/* 🔁 Form Section */}
          <form className="grid grid-cols-1 gap-5" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-3 rounded-md bg-white text-gray-800 w-full outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-3 rounded-md bg-white text-gray-800 w-full outline-none"
            />

        

            {formType === "unlock" && (
              <input
                type="text"
                name="levelNumber"
                placeholder="Level Number"
                value={formData.levelNumber}
                onChange={handleChange}
                required
                className="p-3 rounded-md bg-white text-gray-800 w-full outline-none"
              />
            )}

            {formType === "inquiry" && (
              <>
                <input
                  type="text"
                  name="childName"
                  placeholder="Child's Name"
                  value={formData.childName}
                  onChange={handleChange}
                  className="p-3 rounded-md bg-white text-gray-800 w-full outline-none"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="p-3 rounded-md bg-white text-gray-800 w-full outline-none"
                ></textarea>
              </>
            )}

            {/* Honeypot Field */}
            <input
              type="text"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              className="hidden"
              tabIndex="-1"
              autoComplete="off"
              aria-hidden="true"
            />

            <div className="flex justify-center">
              <CustomButton
                type="submit"
                text={formType === "inquiry" ? "Send Message" : "Send via WhatsApp"}
                className="py-2 px-6 text-[16px] sm:text-[18px] rounded-2xl hover:opacity-90"
                color= "var(--popy)"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FifthSec;
