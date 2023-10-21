import BrandList from "../../components/brand/BrandList";

const Home = () => {
  const sponsors = [
    {
      id: 1,
      name: "Sponsor 1",
      logoUrl:
        "https://img.freepik.com/free-photo/business-people-shaking-hands-meeting-room_53876-15184.jpg?w=1380&t=st=1697798648~exp=1697799248~hmac=8e4b285f6ad7af0e3538ef9a4286e10849fc83a9e2de1b954c64a53107aa9576",
    },
    {
      id: 2,
      name: "Sponsor 2",
      logoUrl:
        "https://img.freepik.com/free-photo/business-people-shaking-hands-meeting-room_53876-15184.jpg?w=1380&t=st=1697798648~exp=1697799248~hmac=8e4b285f6ad7af0e3538ef9a4286e10849fc83a9e2de1b954c64a53107aa9576",
    },
    {
      id: 3,
      name: "Sponsor 3",
      logoUrl:
        "https://img.freepik.com/free-photo/business-people-shaking-hands-meeting-room_53876-15184.jpg?w=1380&t=st=1697798648~exp=1697799248~hmac=8e4b285f6ad7af0e3538ef9a4286e10849fc83a9e2de1b954c64a53107aa9576",
    },
    {
      id: 4,
      name: "Sponsor 4",
      logoUrl:
        "https://img.freepik.com/free-photo/business-people-shaking-hands-meeting-room_53876-15184.jpg?w=1380&t=st=1697798648~exp=1697799248~hmac=8e4b285f6ad7af0e3538ef9a4286e10849fc83a9e2de1b954c64a53107aa9576",
    },
  ];

  return (
    <>
      <div className="dark:bg-gray-700">
        <BrandList />
      </div>
      <section className="bg-gray-100 py-8 dark:bg-gray-600">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4 dark:text-gray-200">
            Our Sponsors
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {sponsors.map((sponsor) => (
              <div key={sponsor.id} className="p-4">
                <img
                  src={sponsor.logoUrl}
                  alt={sponsor.name}
                  className="h-16 mx-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
