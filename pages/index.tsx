import { HERO_BG } from "@/constants/images";
import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import Image from "next/image";

function Home() {
  return (
    <>
      <section
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          textShadow: "0 2px 8px rgba(0,0,0,0.5)",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
          Find your favorite place here!
        </h1>
        <p style={{ fontSize: "1.25rem" }}>
          The best prices for over 2 million properties worldwide.
        </p>
      </section>

      {/* Listing Section */}
      <section style={{ padding: "2rem 0" }}>
        <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
          Featured Properties
        </h2>
        <div
          style={{
            display: "flex",
            gap: "2rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {PROPERTYLISTINGSAMPLE.map((property, index) => (
            <div
              key={property.name + index}
              style={{
                width: 300,
                border: "1px solid #eee",
                borderRadius: 12,
                overflow: "hidden",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                background: "#fff",
                position: "relative",
              }}
            >
              <Image
                src={property.image}
                alt={property.name}
                style={{
                  width: "100%",
                  height: 180,
                  objectFit: "cover",
                  display: "block",
                }}
              />
              {property.discount && (
                <span
                  style={{
                    position: "absolute",
                    top: 10,
                    left: 10,
                    background: "#ff5252",
                    color: "#fff",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "8px",
                    fontWeight: "bold",
                    fontSize: "0.9rem",
                  }}
                >
                  -{property.discount}%
                </span>
              )}
              <div style={{ padding: "1rem" }}>
                <h3 style={{ margin: "0 0 0.5rem 0" }}>{property.name}</h3>
                <div
                  style={{
                    marginBottom: "0.5rem",
                    color: "#0070f3",
                    fontWeight: "bold",
                  }}
                >
                  ${property.price.toLocaleString()}
                </div>
                <div>⭐ {property.rating}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
