const Banner = () => {
  return (
    <div
      className="hero min-h-[50vh]"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-vector/blue-futuristic-networking-technology_53876-100679.jpg?w=1380&t=st=1697781132~exp=1697781732~hmac=4b6b76e1d2129b72aecac27942afab6882bb4829595eb35dd0b569768ade8a8b)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
