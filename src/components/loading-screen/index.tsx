import "./loader.style.css";

export default function LoadingScreen() {
  return (
    <section className="fixed inset-0 flex items-center justify-center bg-background/15 backdrop-blur z-50">
      <div className="loader">
        <div className="loader-square bg-foreground"></div>
        <div className="loader-square bg-foreground"></div>
        <div className="loader-square bg-foreground"></div>
        <div className="loader-square bg-foreground"></div>
        <div className="loader-square bg-foreground"></div>
        <div className="loader-square bg-foreground"></div>
        <div className="loader-square bg-foreground"></div>
      </div>
    </section>
  );
}
