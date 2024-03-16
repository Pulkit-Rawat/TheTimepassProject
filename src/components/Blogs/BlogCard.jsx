import CarBanner from "../../assets/banners/car-blog-banner.png";

const BlogCard = ({ snack = {} }) => {
  return (
    <div className="blog-card mb-4">
      {snack?.media[0] && (
        <img className="banner" src={snack.media[0]} alt="_img" />
      )}
      <div className="desc mt-1">
        <p>{snack?.title || "-"}</p>
      </div>
    </div>
  );
};

export default BlogCard;
