const BestSelling = ({ packages, name }: any) => {
  return (
    <section>
      <h2 className="text-2xl md:text-4xl font-bold mb-6">
        Best-Selling {name} Honeymoon Packages
      </h2>

      <div className="grid sm:grid-cols-2 gap-6">
        {packages.map((pkg: any, i: number) => (
          <div
            key={i}
            className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition"
          >
            <img
              src={pkg.image}
              className="h-56 w-full object-cover"
            />

            <div className="p-4">
              <h3 className="font-semibold text-lg">{pkg.title}</h3>

              <p className="text-sm text-gray-500 mt-2">{pkg.days}</p>
              <p className="text-sm text-gray-500">{pkg.route}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSelling;