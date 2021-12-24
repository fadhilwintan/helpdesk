const head = { "Content-Type": "application/json", Accept: "application/json" };

// const pingAuction = 'http://localhost:8080/api/'
// const url = 'http://localhost:8080/'

const baseUrl = "http://localhost:8000/api";

// const url = 'http://node-ping-auction.ap-south-1.elasticbeanstalk.com/'

export function headers() {
  const token = localStorage.getItem("token");
  return {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
}

export { baseUrl, head };
