"use client";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-dark text-center py-4">
      <p>
        © 2023 - {currentYear} | พรรคเพื่อเธอ | โรงเรียนบางปะอิน “ราชานุเคราะห์
        ๑”
      </p>
      <p>
        Powered by{" "}
        <a
          className="underline cursor-pointer transition hover:text-blue-500"
          href="https://oxygen-project.xyz"
        >
          Oxygen-Project
        </a>
      </p>
    </footer>
  );
};

export default Footer;
