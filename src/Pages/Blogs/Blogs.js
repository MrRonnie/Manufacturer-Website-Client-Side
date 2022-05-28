import React from "react";
import Footer from "../Shared/Footer";

const Blogs = () => {
  return (
    <section className="px-12 mt-10">
      <div class="items-center  justify-center flex gap-2 text-secondary grid-flow-col">
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          clip-rule="evenodd"
          class="fill-current"
        >
          <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
        </svg>
        <p className="text-4xl font-bold">BLOGS</p>
      </div>
      <div className="divider rounded-lg w-52 mx-auto"></div>

      <div className="shadow-sm rounded-lg border p-4 mb-8">
        {/* Question 1  */}
        <h2 className="mb-4 text-xl text-secondary font-semibold text-slate-500">
          <span className="text-green-500  mr-3">Question:</span>
          How will you improve the performance of a React Application?
        </h2>
        <p className="text-gray-500">
          <span className="font-bold mr-3">Ans:</span>
          Optimizing application performance is key for developers who are
          mindful of keeping a users experience positive to keep them on an app
          and engaged. <br /> • Keeping component state local where necessary{" "}
          <br /> • Memorizing React components to prevent unnecessary re-renders{" "}
          <br /> • Code-splitting in React using dynamic import () <br /> •
          Windowing or list virtualization in React <br /> • Lazy loading images
          in React
        </p>
      </div>
      <div className="shadow-sm rounded-lg border p-4 mb-8">
        {/* Question 2  */}
        <h2 className="mb-4 text-xl font-semibold text-slate-500">
          <span className="text-green-500  mr-3">Question:</span>
          What are the different ways to manage a state in a React application?
        </h2>
        <p className="text-gray-500">
          <span className="font-bold mr-3">Ans:</span>
          There are four main types of state we need to properly manage in your
          React apps: <br /> <br />
          #1 Local state - Local state is data we manage in one or another
          component. Local state is most often managed in React using the
          useState hook. <br />
          #2 Global state - Global state is data we manage across multiple
          components. Global state is necessary when we want to get and update
          data anywhere in our app, or in multiple components at least. <br />
          #3 Server state - Data that comes from an external server that must be
          integrated with our UI state. Server state is a simple concept, but
          can be hard to manage alongside all of our local and global UI state{" "}
          <br />
          #4 URL state - Data that exists on our URLs, including the pathname
          and query parameters. URL state is often missing as a category of
          state, but it is an important one.
        </p>
      </div>
      <div className="shadow-sm rounded-lg border p-4 mb-8">
        {/* Question 3  */}
        <h2 className="mb-4 text-xl font-semibold text-slate-500">
          <span className="text-green-500  mr-3">Question:</span>How does
          prototypical inheritance work?
        </h2>
        <p className="text-gray-500">
          <span className="font-bold mr-3">Ans:</span>
          Prototype-based programming is a style of object-oriented programming
          in which behavior reuse (known as inheritance) is performed via a
          process of reusing existing objects that serve as prototypes. This
          model can also be known as prototypal, prototype-oriented, classless,
          or instance-based programming. The Prototypal Inheritance is a feature
          in JavaScript used to add methods and properties in objects. It is a
          method by which an object can inherit the properties and methods of
          another object. Traditionally, in order to get and set the
          [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
        </p>
      </div>
      <div className="shadow-sm rounded-lg border p-4 mb-8">
        {/* Question 4 */}
        <h2 className="mb-4 text-xl font-semibold text-slate-500">
          <span className="text-green-500  mr-3">Question:</span>
          Why you do not set the state directly in React. For example, if you
          have const [products, setProducts] = useState([]). Why you do not set
          products = [...] instead, you use the setProducts
        </h2>
        <p className="text-gray-500">
          <span className="font-bold mr-3">Ans:</span>
          It declares a “state variable”. Our variable is called count but we
          could call it anything else, like banana. This is a way to “preserve”
          some values between the function calls — useState is a new way to use
          the exact same capabilities that this.state provides in a class.
          Normally, variables “disappear” when the function exits but state
          variables are preserved by React.
        </p>
      </div>
      <div className="shadow-sm rounded-lg border p-4 mb-8">
        {/* Question 5  */}
        <h2 className="mb-4 text-xl font-semibold text-slate-500">
          <span className="text-green-500  mr-3">Question:</span>You have an
          array of products. Each product has a name, price, description, etc.
          How will you implement a search to find products by name?
        </h2>
        <p className="text-gray-500">
          <span className="font-bold mr-3">Ans:</span>
        </p>
      </div>
      <div className="shadow-sm rounded-lg border p-4 mb-8">
        {/* Question 6  */}
        <h2 className="mb-4 text-xl font-semibold text-slate-500">
          <span className="text-green-500  mr-3">Question:</span>What is a unit
          test? Why should write unit tests?
        </h2>
        <p className="text-gray-500">
          <span className="font-bold mr-3">Ans:</span>
          Unit testing is a type of software testing where individual units or
          components of a software are tested. The purpose is to validate that
          each unit of the software code performs as expected. Unit Testing is
          done during the development (coding phase) of an application by the
          developers. Unit Tests isolate a section of code and verify its
          correctness. A unit may be an individual function, method, procedure,
          module, or object. Unit Testing is important because software
          developers sometimes try saving time doing minimal unit testing and
          this is myth because inappropriate unit testing leads to high cost
          Defect fixing during System Testing, Integration Testing and even Beta
          Testing after application is built. If proper unit testing is done in
          early development, then it saves time and money in the end. <br />{" "}
          <br />
          Here, are the key reasons to perform unit testing in software
          engineering: <br /> <br />
          • Unit tests help to fix bugs early in the development cycle and save
          costs. <br />
          • It helps the developers to understand the testing code base and
          enables them to make changes quickly <br />
          • Good unit tests serve as project documentation <br />• Unit tests
          help with code re-use. Migrate both your code and your tests to your
          new project. Tweak the code until the tests run again.
        </p>
      </div>

      <div className="container  mt-10">
        <div className="font-sans bg-gradient-to-b from-green-100 to-gray-100 rounded-lg shadow-xl p-4 text-center">
          <h2 className="font-bold break-normal text-xl md:text-3xl">
            Subscribe to Newsletter
          </h2>
          <h3 className="font-bold break-normal text-gray-600 text-sm md:text-base">
            Get the latest posts delivered right to your inbox
          </h3>
          <div className="w-full text-center pt-4">
            <form action="#">
              <div className="max-w-xl mx-auto p-1 pr-0 flex flex-wrap items-center">
                <input
                  type="email"
                  placeholder="youremail@example.com"
                  className="flex-1 mt-4 appearance-none border border-gray-400 rounded shadow-md p-3 text-gray-600 mr-2 focus:outline-none"
                />
                <button
                  type="submit"
                  className="flex-1 mt-4 block md:inline-block appearance-none bg-green-500 text-white text-base font-semibold tracking-wider uppercase py-4 rounded shadow hover:bg-green-400"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </section>
  );
};

export default Blogs;
