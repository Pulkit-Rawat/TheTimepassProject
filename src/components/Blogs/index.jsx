import React, { useEffect, useState } from "react";
import "./style.scss";
import BlogCard from "./BlogCard";
import { api } from "../../utilities/axios";

const Blogs = () => {
  const [snacks, setSnacks] = useState([]);

  const getSnacks = async () => {
    try {
      let payload = {
        tag: "tren",
      };
      const { data } = await api.post("get-snacks", payload);
      setSnacks(data?.data || []);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getSnacks();
  }, []);
  
  return (
    <div className="blogs-wrapper">
      {snacks.length
        ? snacks.map((snack) => <BlogCard snack={snack} />)
        : "No records found"}
    </div>
  );
};

export default Blogs;
