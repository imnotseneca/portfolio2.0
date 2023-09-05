export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <hr />
      <small className="mb-2 my-4 block text-xs">
        &copy;{new Date().getFullYear()} <a className="underline" href="https://www.linkedin.com/in/bruno-corrao/" target="_blank">Bruno Corrao</a>. All rights reserved.
      </small>
    </footer>
  );
}
