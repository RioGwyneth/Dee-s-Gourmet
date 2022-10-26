export default function Footer({
  bgcolor
  }) {
    return (
      <footer
        className={`${bgcolor} h-16 flex justify-center items-center text-center lg:text-left  mt-20`}
      >
      <div className="text-white text-center text-xs p-4">
          © 2022 Dee’s Gourmet  | 
          <a className="text-white text-xs"> Developed by Rio Gwyneth Soliva </a>
        </div>
      </footer>
    );
  }
  