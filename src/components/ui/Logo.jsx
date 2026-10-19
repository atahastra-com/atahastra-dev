import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Logo({ className = "", showText = true, size = "md" }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const sizes = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12 md:h-14 md:w-14",
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleClick = (event) => {
    if (pathname !== "/") return;

    event.preventDefault();
    if (window.location.hash) {
      navigate("/", { replace: true });
    }
    scrollToTop();
  };

  if (!showText) {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <img
          src="/logo.png"
          alt="Atahastra"
          className={`${sizes[size]} shrink-0 object-contain`}
        />
      </div>
    );
  }

  return (
    <Link
      to="/"
      onClick={handleClick}
      className={`flex cursor-pointer items-center gap-3 ${className}`}
    >
      <img
        src="/logo.png"
        alt="Atahastra"
        className={`${sizes[size]} shrink-0 object-contain`}
      />
      <span className="text-sm font-bold tracking-[0.22em] text-white">
        ATAHASTRA
      </span>
    </Link>
  );
}
