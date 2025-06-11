import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

const PropertyProp = (item, index) => {
  // console.log(item);

  const amenityIcons = {
    wifi: { icon: "fas fa-wifi", label: "Wifi" },
    airConditioner: { icon: "fas fa-snowflake", label: "AC" },
    parking: { icon: "fas fa-parking", label: "Parking" },
    tv: { icon: "fas fa-tv", label: "TV" },
    kitchen: { icon: "fas fa-utensils", label: "Kitchen" },
    gym: { icon: "fas fa-dumbbell", label: "Gym" },
    pool: { icon: "fas fa-swimming-pool", label: "Pool" },
    security: { icon: "fas fa-shield-alt", label: "Security" },
    balcony: { icon: "fas fa-couch", label: "Balcony" },
    heating: { icon: "fas fa-fire", label: "Heating" },
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Format to Indian units (Cr, L, ₹)
  const formatToIndianUnit = (amount) => {
    if (!amount) return "N/A";
    amount = Number(amount);
    if (amount >= 10000000) return `₹${(amount / 10000000)} Cr`;
    if (amount >= 100000) return `₹${(amount / 100000)} L`;
    return "₹" + amount.toLocaleString("en-IN");
  };

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
      <div className="card h-100 shadow-sm">
        <NavLink to={`/property/${item._id}`}>
          <img
            src={`https://rent-backend-aj50.onrender.com/upload_images/${item.item.image}`}
            alt={item.item.title}
            className="card-img-top"
            style={{ height: "200px", objectFit: "cover" }}
          />
        </NavLink>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title main-color">
            Rent - {formatToIndianUnit(item.item.rent)}
          </h5>
          <span className="card-title main-color">
            Advance required - {formatToIndianUnit(item.item.advance_money)}
          </span>

          <p className="card-text text-muted mb-1">{item.item.address}</p>
          <p className="card-text fw-bold">{item.item.title}</p>

          <div className="mt-auto">
            {item.item.amenities ? (
              <div className="d-flex flex-wrap gap-1">
                {Object.entries(amenityIcons).map(
                  ([key, value]) =>
                    item.item.amenities[key] && (
                      <span
                        key={key}
                        className="badge bg-light text-dark me-1 mb-1"
                      >
                        <i className={`${value.icon} me-1`}></i>
                        {value.label}
                      </span>
                    )
                )}
              </div>
            ) : (
              <p className="text-muted">No amenities available</p>
            )}

            <NavLink
              to={"/details/" + item.item._id}
              className="btn btn-custom text-light rounded-5 py-2 px-4 mt-3  btn-hover "
            >
              See details
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyProp;
