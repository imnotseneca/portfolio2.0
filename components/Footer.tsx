export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy;{new Date().getFullYear()} <a className="underline" href="https://www.linkedin.com/in/bruno-corrao/" target="_blank">Bruno Corrao</a>. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (implementing App Router & Server Actions), TypeScript,
        Tailwind CSS, Framer Motion, Resend, React-Email and React-hot-toast.
      </p>
    </footer>
  );
}
