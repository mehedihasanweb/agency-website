import React from "react";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Creating Streamlined Safeguarding Processes with OneRen",
      image: "/src/assets/card1.png",
    },
    {
      id: 2,
      title:
        "What are your safeguarding responsibilities and how can you manage them?",
      image: "/src/assets/card2.png",
    },
    {
      id: 3,
      title: "Revamping the Membership Model with Triathlon Australia",
      image: "/src/assets/card3.png",
    },
  ];

  return (
    <div
      className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12 "
      id="testimonial"
    >
      <div className="text-center md:w-1/2 mx-auto">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-4">
          Caring is the new marketing
        </h2>
        <p className="text-sm  text-neutralGrey mb-8 md:w-3/4 mx-auto">
          The Nextcent blog is the best place to read about the latest
          membership insights, trends and more. See who's joining the community,
          read about how our community are increasing their membership income
          and lot's more.​
        </p>
      </div>

      {/* all blogs */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 items-center justify-between">
        {blogs.map((blog) => (
          <div key={blog.id} className="mx-auto relative mb-12 cursor-pointer">
            <img
              src={blog.image}
              alt=""
              className="hover:scale-95 transition-all duration-300"
            />
            <div className="text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12">
              <h2 className="mb-3 text-neutralGrey font-semibold">
                {blog.title}
              </h2>
              <div className="flex items-center justify-center gap-8">
                <a
                  href="/"
                  className="font-bold text-brandPrimary hover:text-neutral-700"
                >
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="11"
                    viewBox="0 0 17 11"
                    fill="none"
                    className="inline-block ml-2"
                  >
                    <path
                      d="M12 9.39905L15.2929 6.10615C15.6834 5.71563 15.6834 5.08246 15.2929 4.69194L12 1.39905M15 5.39905L1 5.39905"
                      stroke="#4CAF4F"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
