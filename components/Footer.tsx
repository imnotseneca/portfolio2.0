export default function Footer() {
  return (
    <footer className="mb-5 px-4 text-center text-gray-500 border-t border-slate-700">
      <small className="my-4 mt-5 block text-xs">
        &copy;{new Date().getFullYear()}{" "}
        <a
          className="underline"
          href="https://www.linkedin.com/in/bruno-corrao/"
          target="_blank"
        >
          Bruno Corrao
        </a>
        . All rights reserved.
      </small>
    </footer>
  );
}
