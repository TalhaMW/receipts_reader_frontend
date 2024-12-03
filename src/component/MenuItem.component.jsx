const MenuItem = ({ icon, label }) => (
    <li className="group">
      <a
        href="#"
        className="flex items-center gap-2 transition transform group-hover:scale-105 group-hover:text-yellow-300"
      >
        <span className="text-white">{icon}</span>
        <span className="hidden md:inline-block font-medium">{label}</span>
      </a>
    </li>
  );
  
  export default MenuItem