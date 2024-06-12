const Contact = () => {
  return (
    <div className="">
      <ul className="space-y-2 print:space-y-1">
        <li>
          <span className="inline-block w-28">Email</span>:{" "}
          <a href="mailto:clementdungler@gmail.com">clementdungler@gmail.com</a>
        </li>
        <li>
          <span className="inline-block w-28">Téléphone</span>:{" "}
          <a href="tel:0612571894">0612571894</a>
        </li>
        <li>
          <span className="inline-block w-28">Adresse</span>: Nantes, France
        </li>
        <li>
          <span className="inline-block w-28">Langue</span>: Français, Anglais
        </li>
        <li>
          <span className="inline-block w-28">Web</span>:{" "}
          <a href="https://clementdungler.com">https://clementdungler.com</a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
