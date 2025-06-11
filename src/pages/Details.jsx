import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import DetailsModal from "../component/DetailsModal";
import Slider from "../component/Slider";
// import seekerSchema from "../schema/SeekerSignupSchema";

const Details = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [ownerName, setOwnerName] = useState("");
  const [ownerNum, setOwnerNum] = useState("");
  const [email, setEmail] = useState("");
  const [advance_money, setAdvance_money] = useState("");
  const [show, setShow] = useState(false);
  const [popUpInfo, setPopUpInfo] = useState({});

  useEffect(() => {
    {
      localStorage.getItem("owner-token")
        ? setPopUpInfo({
            show: false,
            title: "Click 'Contact' to contact owner ",
            nav: "/contact",
          })
        : localStorage.getItem("access-token")
        ? setPopUpInfo({
            show: false,
            title: "Click 'Contact' to contact owner ",
            nav: "/contact",
          })
        : setPopUpInfo({
            show: false,
            title: "Message",
            msg: "You are not logged in to see property owner details, select appropriate login option for you",
            nav: { seekerLogin: "/seeker/login", ownerLogin: "/owner/login" },
          });
    }
  }, []);

  const handlePayment = async () => {
    try {
      // 1. Call backend to create order
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/razorpay/create-order`,
        {
          amount: advance_money,
          property_id: property._id,
          owner_id: property.owner_id._id,
          seeker_id: localStorage.getItem("seeker_id"),
        },
        {
          headers: {
            Authorization: localStorage.getItem("access-token"),
          },
        }
      );

      if (!data.success || !data.order) {
        alert("Failed to create payment order.");
        
      }

      const { order } = data;

      // 2. Set Razorpay options
      const options = {
        key: "rzp_test_izSpzuQAJtYG6G", // Razorpay Key ID
        amount: order.amount, // amount in paise
        currency: "INR",
        name: "RentEase",
        description: "Advance Booking Payment",
        order_id: order.id,
        // handler: async function (response) {
        //   try {
        //     // 3. Verify payment on backend
        //     const verifyRes = await axios.post(
        //       `${import.meta.env.VITE_API_URL}/razorpay/verify-payment`,
        //       {
        //         razorpay_order_id: response.razorpay_order_id,
        //         razorpay_payment_id: response.razorpay_payment_id,
        //         razorpay_signature: response.razorpay_signature,
        //       },
        //       {
        //         headers: {
        //           Authorization: localStorage.getItem("access-token"),
        //         },
        //       }
        //     );

        //     if (verifyRes.data.success) {
        //       alert(" Payment successful and verified!");
        //       // You can redirect or update UI here
        //     } else {
        //       alert(" Payment verification failed.");
        //     }
        //   } catch (err) {
        //     console.error("Error during payment verification:", err);
        //     alert("Verification failed due to server error.");
        //   }
        // },
        theme: {
          color: "#3399cc",
        },
      };

      // 4. Open Razorpay popup
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error("Error initiating payment:", err);
      alert("Failed to initiate payment.");
    }
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/property/find/${id}`)
      .then((result) => {
        const propertyData = result.data[0];
        setProperty(propertyData);

        // Set owner details
        if (propertyData.owner_id) {
          setOwnerName(propertyData.owner_id.name || "---");
          setOwnerNum(propertyData.owner_id.phone || "000");
          setEmail(propertyData.owner_id.email || "---");
          setAdvance_money(propertyData.advance_money || "---");
          localStorage.getItem("owner-token") ||
          localStorage.getItem("access-token")
            ? setPopUpInfo((curr) => ({
                ...curr,
                nav: "/contact/" + propertyData._id,
              }))
            : null;
        }

        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching property details:", err);
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  if (loading) {
    return <div className="text-center my-5">Loading...</div>;
  }

  if (!property) {
    return <div className="text-center my-5">Property not found.</div>;
  }

  const formatToIndianUnit = (amount) => {
    if (amount >= 10000000) return (amount / 10000000).toFixed(2) + " Cr";
    if (amount >= 100000) return (amount / 100000).toFixed(2) + " L";
    return "₹ " + amount.toFixed(2);
  };

  const isLoggedIn =
    localStorage.getItem("owner-token") || localStorage.getItem("access-token");

  return (
    <>
      <Slider data={<h1 className="text-white">Details</h1>} />

      <div className="container my-4">
        <div className="row">
          {/* Property Details */}
          <div className="col-lg-8 col-md-7 col-12 mb-4">
            <div className="card p-3 shadow-sm h-100">
              <h3 className="mb-1">{property.title}</h3>
              <h5 className="text-success">
                Rent: {property.rent ? formatToIndianUnit(property.rent) : ""}
              </h5>
              <h5 className="text-success">
                Advance:{" "}
                {property.advance_money
                  ? formatToIndianUnit(property.advance_money)
                  : ""}
              </h5>

              <p className="text-muted">
                <i className="fa fa-map-marker me-2" aria-hidden="true"></i>
                {property.address}
              </p>
              <p className="text-muted">
                <i className="fa fa-tag me-2" aria-hidden="true"></i>
                {property.property_type}
              </p>

              <div className="row">
                <div className="col-sm-6 col-12 mb-3">
                  <img
                    src={`https://rent-backend-aj50.onrender.com/upload_images/${property.image}`}
                    className="img-fluid rounded"
                    alt="Property"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "250px",
                    }}
                  />
                </div>
                <div className="col-sm-6 col-12">
                  <h6 className="mt-2 mb-2">Amenities:</h6>
                  {property.amenities ? (
                    <div className="d-flex flex-wrap gap-2">
                      {Object.entries(amenityIcons).map(
                        ([key, value]) =>
                          property.amenities[key] && (
                            <span
                              key={key}
                              className="badge bg-light border text-dark"
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
                </div>
              </div>
            </div>
          </div>

          {/* Owner Contact Section */}
          <div className="col-lg-4 col-md-5 col-12 mb-4">
            <div className="card p-3 shadow-sm h-100">
              <h4>Owner Contact</h4>
              <hr />
              <p>
                <b>Name:</b> {isLoggedIn ? ownerName : "Login to view"}
              </p>
              <p>
                <b>Contact:</b>
                {isLoggedIn ? `+91 ${ownerNum}` : "Login to view"}
              </p>
              <p>
                <b>Email:</b> {isLoggedIn ? email : "Login to view"}
              </p>
              <p>
                <b>Advance Booking Amount:</b>
                {isLoggedIn ? `₹ ${advance_money}` : "Login to view"}
              </p>

              {localStorage.getItem("owner-token") ? (
                <>
                  <button
                    onClick={handlePayment}
                    className="btn  btn-custom btn-rounded rounded-5 text-light col-md-3 py-3 mt-3 btn-sm"
                  >
                    Message
                  </button>
                  <button
                    onClick={() => setPopUpInfo({ ...popUpInfo, show: true })}
                    className="btn  btn-custom btn-rounded rounded-5 text-light col-md-3 py-3 mt-3"
                  >
                    Pay
                  </button>
                </>
              ) : localStorage.getItem("access-token") ? (
                <div className="d-flex justify-content-around">
                  <button
                    onClick={() => setPopUpInfo({ ...popUpInfo, show: true })}
                    className="btn  btn-custom btn-rounded rounded-5 text-light col-md-3 py-3 mt-3"
                  >
                    Message
                  </button>
                  <button
                    onClick={handlePayment}
                    className="btn btn-custom btn-rounded rounded-5 text-light col-md-3 py-3 mt-3"
                  >
                    Pay
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setPopUpInfo({ ...popUpInfo, show: true })}
                  className="btn btn-custom text-light rounded-5 py-2 px-2 mt-3  btn-hover"
                >
                  Contact
                </button>
              )}
            </div>
          </div>
          <DetailsModal
            show={show}
            info={popUpInfo}
            setPopUpInfo={setPopUpInfo}
          />
        </div>
      </div>
    </>
  );
};

export default Details;
