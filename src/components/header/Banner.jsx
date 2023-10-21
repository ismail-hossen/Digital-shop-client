const Banner = () => {
  return (
    <div
      className="hero min-h-[50vh] relative"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-vector/blue-futuristic-networking-technology_53876-100679.jpg?w=1380&t=st=1697781132~exp=1697781732~hmac=4b6b76e1d2129b72aecac27942afab6882bb4829595eb35dd0b569768ade8a8b')",
      }}
    >
      <div className="hero-overlay bg-opacity-60 dark:bg-opacity-80"></div>
      <div className="hero-content text-center text-neutral-content relative z-10">
        <div className="max-w-4xl mx-auto p-6">
          <h1 className="mb-5 text-5xl font-bold text-white dark:text-gray-200">
            Welcome to the World of Technology
          </h1>
          <p className="mb-5 text-lg text-white dark:text-gray-200">
            Explore the latest innovations in electronics and technology. We
            bring you cutting-edge solutions and insights to power your future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
