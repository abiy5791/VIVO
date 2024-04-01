import logo from "../../assets/logo.png";
export default () => {
  // const footerNavs = [
  //   {
  //     label: "Company",
  //     items: [
  //       {
  //         href: "javascript:void()",
  //         name: "Partners",
  //       },
  //       {
  //         href: "javascript:void()",
  //         name: "Blog",
  //       },
  //       {
  //         href: "javascript:void()",
  //         name: "Team",
  //       },
  //       {
  //         href: "javascript:void()",
  //         name: "Careers",
  //       },
  //     ],
  //   },
  //   {
  //     label: "Resources",
  //     items: [
  //       {
  //         href: "javascript:void()",
  //         name: "contact",
  //       },
  //       {
  //         href: "javascript:void()",
  //         name: "Support",
  //       },
  //       {
  //         href: "javascript:void()",
  //         name: "Docs",
  //       },
  //       {
  //         href: "javascript:void()",
  //         name: "Pricing",
  //       },
  //     ],
  //   },
  //   {
  //     label: "About",
  //     items: [
  //       {
  //         href: "javascript:void()",
  //         name: "Terms",
  //       },
  //       {
  //         href: "javascript:void()",
  //         name: "License",
  //       },
  //       {
  //         href: "javascript:void()",
  //         name: "Privacy",
  //       },
  //       {
  //         href: "javascript:void()",
  //         name: "About US",
  //       },
  //     ],
  //   },
  // ];

  // const contactMethods = [
  //   {
  //     icon: (
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         fill="none"
  //         viewBox="0 0 24 24"
  //         strokeWidth={1.5}
  //         stroke="currentColor"
  //         className="w-6 h-6"
  //       >
  //         <path
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //           d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
  //         />
  //         <path
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //           d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
  //         />
  //       </svg>
  //     ),
  //     contact: "Mountain View, California, United State.",
  //     title: "Our office",
  //   },
  //   {
  //     icon: (
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         fill="none"
  //         viewBox="0 0 24 24"
  //         strokeWidth={1.5}
  //         stroke="currentColor"
  //         className="w-6 h-6"
  //       >
  //         <path
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //           d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
  //         />
  //       </svg>
  //     ),
  //     contact: "+1 (555) 000-000",
  //     title: "Phone",
  //   },
  //   {
  //     icon: (
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         fill="none"
  //         viewBox="0 0 24 24"
  //         strokeWidth={1.5}
  //         stroke="currentColor"
  //         className="w-6 h-6"
  //       >
  //         <path
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //           d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
  //         />
  //       </svg>
  //     ),
  //     contact: "Support@example.com",
  //     title: "Email",
  //   },
  // ];

  // return (
  //   <>
  //     <main className="py-1">
  //       <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8 dark:text-slate-400 ">
  //         <div className="max-w-xl space-y-3">
  //           <h3 className="text-indigo-600 font-semibold dark:text-indigo-400">
  //             Contact
  //           </h3>
  //           <p className="text-gray-800 text-3xl font-semibold sm:text-4xl dark:text-slate-100 ">
  //             Let us know how we can help
  //           </p>
  //           <p>
  //             We’re here to help and answer any question you might have, We look
  //             forward to hearing from you .
  //           </p>
  //         </div>
  //         <div>
  //           <ul className="mt-12 flex flex-wrap gap-x-12 gap-y-6 items-center lg:gap-x-24">
  //             {contactMethods.map((item, idx) => (
  //               <li key={idx}>
  //                 <h4 className="text-gray-800 text-lg font-medium dark:text-slate-400 ">
  //                   {item.title}
  //                 </h4>
  //                 <div className="mt-3 flex items-center gap-x-3">
  //                   <div className="flex-none text-gray-400">{item.icon}</div>
  //                   <p>{item.contact}</p>
  //                 </div>
  //               </li>
  //             ))}
  //           </ul>
  //         </div>
  //       </div>
  //     </main>

  //     <footer className="text-gray-500 dark:bg-transparent bg-white px-4 py-5 max-w-screen-xl mx-auto md:px-8">
  //       <div className="gap-6 justify-between md:flex">
  //         <div className="flex-1">
  //           <div className="max-w-xs">
  //             <img src={logo} className="w-32" />
  //             <p className="leading-relaxed mt-2 text-[15px]">
  //               Lorem Ipsum has been the industry's standard dummy text ever
  //               since the 1500s.
  //             </p>
  //           </div>
  //           <form onSubmit={(e) => e.preventDefault()}>
  //             <label className="block pt-4 pb-2">Stay up to date</label>
  //             <div className="max-w-sm flex items-center border rounded-md p-1 dark:border-slate-400">
  //               <input
  //                 type="email"
  //                 placeholder="Enter your email"
  //                 className="w-full p-2.5 outline-none border-none"
  //               />
  //               <button className="p-2.5 rounded-md text-white bg-indigo-600 outline-none shadow-md focus:shadow-none sm:px-5">
  //                 Subscribe
  //               </button>
  //             </div>
  //           </form>
  //         </div>
  //         <div className="flex-1 mt-10 space-y-6 items-center justify-between sm:flex md:space-y-0 md:mt-0">
  //           {footerNavs.map((item, idx) => (
  //             <ul className="space-y-4" key={idx}>
  //               <h4 className="text-gray-800 font-medium dark:text-slate-400 ">
  //                 {item.label}
  //               </h4>
  //               {item.items.map((el, idx) => (
  //                 <li key={idx}>
  //                   <a
  //                     href={el.href}
  //                     className="hover:underline hover:text-indigo-600"
  //                   >
  //                     {el.name}
  //                   </a>
  //                 </li>
  //               ))}
  //             </ul>
  //           ))}
  //         </div>
  //       </div>
  //       <div className="mt-8 py-6 border-t items-center justify-between sm:flex">
  //         <div className="mt-4 sm:mt-0">
  //           &copy; 2022 Float UI All rights reserved.
  //         </div>
  //         <div className="mt-6 sm:mt-0">
  //           <ul className="flex items-center space-x-4">
  //             <li className="w-10 h-10 border rounded-full flex items-center justify-center">
  //               <a href="javascript:void()">
  //                 <svg
  //                   class="svg-icon w-6 h-6 text-blue-400"
  //                   viewBox="0 0 20 20"
  //                 >
  //                   <path
  //                     fill="none"
  //                     d="M18.258,3.266c-0.693,0.405-1.46,0.698-2.277,0.857c-0.653-0.686-1.586-1.115-2.618-1.115c-1.98,0-3.586,1.581-3.586,3.53c0,0.276,0.031,0.545,0.092,0.805C6.888,7.195,4.245,5.79,2.476,3.654C2.167,4.176,1.99,4.781,1.99,5.429c0,1.224,0.633,2.305,1.596,2.938C2.999,8.349,2.445,8.19,1.961,7.925C1.96,7.94,1.96,7.954,1.96,7.97c0,1.71,1.237,3.138,2.877,3.462c-0.301,0.08-0.617,0.123-0.945,0.123c-0.23,0-0.456-0.021-0.674-0.062c0.456,1.402,1.781,2.422,3.35,2.451c-1.228,0.947-2.773,1.512-4.454,1.512c-0.291,0-0.575-0.016-0.855-0.049c1.588,1,3.473,1.586,5.498,1.586c6.598,0,10.205-5.379,10.205-10.045c0-0.153-0.003-0.305-0.01-0.456c0.7-0.499,1.308-1.12,1.789-1.827c-0.644,0.28-1.334,0.469-2.06,0.555C17.422,4.782,17.99,4.091,18.258,3.266"
  //                   ></path>
  //                 </svg>
  //               </a>
  //             </li>

  //             <li className="w-10 h-10 border rounded-full flex items-center justify-center">
  //               <a href="javascript:void()">
  //                 <svg
  //                   class="svg-icon w-6 h-6 text-blue-700"
  //                   viewBox="0 0 20 20"
  //                 >
  //                   <path
  //                     fill="none"
  //                     d="M11.344,5.71c0-0.73,0.074-1.122,1.199-1.122h1.502V1.871h-2.404c-2.886,0-3.903,1.36-3.903,3.646v1.765h-1.8V10h1.8v8.128h3.601V10h2.403l0.32-2.718h-2.724L11.344,5.71z"
  //                   ></path>
  //                 </svg>
  //               </a>
  //             </li>

  //             <li className="w-10 h-10 border rounded-full flex items-center justify-center">
  //               <a href="javascript:void()">
  //                 <svg
  //                   class="svg-icon w-6 h-6 text-blue-500"
  //                   viewBox="0 0 20 20"
  //                 >
  //                   <path
  //                     fill="none"
  //                     d="M10,2.531c-4.125,0-7.469,3.344-7.469,7.469c0,4.125,3.344,7.469,7.469,7.469c4.125,0,7.469-3.344,7.469-7.469C17.469,5.875,14.125,2.531,10,2.531 M10,3.776c1.48,0,2.84,0.519,3.908,1.384c-1.009,0.811-2.111,1.512-3.298,2.066C9.914,6.072,9.077,5.017,8.14,4.059C8.728,3.876,9.352,3.776,10,3.776 M6.903,4.606c0.962,0.93,1.82,1.969,2.53,3.112C7.707,8.364,5.849,8.734,3.902,8.75C4.264,6.976,5.382,5.481,6.903,4.606 M3.776,10c2.219,0,4.338-0.418,6.29-1.175c0.209,0.404,0.405,0.813,0.579,1.236c-2.147,0.805-3.953,2.294-5.177,4.195C4.421,13.143,3.776,11.648,3.776,10 M10,16.224c-1.337,0-2.572-0.426-3.586-1.143c1.079-1.748,2.709-3.119,4.659-3.853c0.483,1.488,0.755,3.071,0.784,4.714C11.271,16.125,10.646,16.224,10,16.224 M13.075,15.407c-0.072-1.577-0.342-3.103-0.806-4.542c0.673-0.154,1.369-0.243,2.087-0.243c0.621,0,1.22,0.085,1.807,0.203C15.902,12.791,14.728,14.465,13.075,15.407 M14.356,9.378c-0.868,0-1.708,0.116-2.515,0.313c-0.188-0.464-0.396-0.917-0.621-1.359c1.294-0.612,2.492-1.387,3.587-2.284c0.798,0.97,1.302,2.187,1.395,3.517C15.602,9.455,14.99,9.378,14.356,9.378"
  //                   ></path>
  //                 </svg>
  //               </a>
  //             </li>

  //             <li className="w-10 h-10 border rounded-full flex items-center justify-center">
  //               <a href="javascript:void()">
  //                 <svg
  //                   class="svg-icon w-6 h-6 text-red-600"
  //                   viewBox="0 0 20 20"
  //                 >
  //                   <path
  //                     fill="none"
  //                     d="M9.797,2.214C9.466,2.256,9.134,2.297,8.802,2.338C8.178,2.493,7.498,2.64,6.993,2.935C5.646,3.723,4.712,4.643,4.087,6.139C3.985,6.381,3.982,6.615,3.909,6.884c-0.48,1.744,0.37,3.548,1.402,4.173c0.198,0.119,0.649,0.332,0.815,0.049c0.092-0.156,0.071-0.364,0.128-0.546c0.037-0.12,0.154-0.347,0.127-0.496c-0.046-0.255-0.319-0.416-0.434-0.62C5.715,9.027,5.703,8.658,5.59,8.101c0.009-0.075,0.017-0.149,0.026-0.224C5.65,7.254,5.755,6.805,5.948,6.362c0.564-1.301,1.47-2.025,2.931-2.458c0.327-0.097,1.25-0.252,1.734-0.149c0.289,0.05,0.577,0.099,0.866,0.149c1.048,0.33,1.811,0.938,2.218,1.888c0.256,0.591,0.33,1.725,0.154,2.483c-0.085,0.36-0.072,0.667-0.179,0.993c-0.397,1.206-0.979,2.323-2.295,2.633c-0.868,0.205-1.519-0.324-1.733-0.869c-0.06-0.151-0.161-0.418-0.101-0.671c0.229-0.978,0.56-1.854,0.815-2.831c0.243-0.931-0.218-1.665-0.943-1.837C8.513,5.478,7.816,6.312,7.579,6.858C7.39,7.292,7.276,8.093,7.426,8.672c0.047,0.183,0.269,0.674,0.23,0.844c-0.174,0.755-0.372,1.568-0.587,2.31c-0.223,0.771-0.344,1.562-0.56,2.311c-0.1,0.342-0.096,0.709-0.179,1.066v0.521c-0.075,0.33-0.019,0.916,0.051,1.242c0.045,0.209-0.027,0.467,0.076,0.621c0.002,0.111,0.017,0.135,0.052,0.199c0.319-0.01,0.758-0.848,0.917-1.094c0.304-0.467,0.584-0.967,0.816-1.514c0.208-0.494,0.241-1.039,0.408-1.566c0.12-0.379,0.292-0.824,0.331-1.24h0.025c0.066,0.229,0.306,0.395,0.485,0.52c0.56,0.4,1.525,0.77,2.573,0.523c1.188-0.281,2.133-0.838,2.755-1.664c0.457-0.609,0.804-1.313,1.07-2.112c0.131-0.392,0.158-0.826,0.256-1.241c0.241-1.043-0.082-2.298-0.384-2.981C14.847,3.35,12.902,2.17,9.797,2.214"
  //                   ></path>
  //                 </svg>
  //               </a>
  //             </li>
  //           </ul>
  //         </div>
  //       </div>
  //       <style jsx>{`
  //         .svg-icon path,
  //         .svg-icon polygon,
  //         .svg-icon rect {
  //           fill: currentColor;
  //         }
  //       `}</style>
  //     </footer>
  //   </>
  // );

  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="bg-white dark:bg-slate-900">
      <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex justify-center text-teal-600 sm:justify-start">
              <img src={logo} />
            </div>

            <p className="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
              consequuntur amet culpa cum itaque neque.
            </p>

            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-indigo-500 transition hover:text-teal-700/75"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-indigo-500 transition hover:text-teal-700/75"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-indigo-500 transition hover:text-teal-700/75"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-indigo-500 transition hover:text-teal-700/75"
                >
                  <span className="sr-only">GitHub</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-indigo-500 transition hover:text-teal-700/75"
                >
                  <span className="sr-only">Dribbble</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-900 dark:text-slate-300">
                About Us
              </p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a
                    className="text-gray-700 dark:text-slate-400 transition hover:text-gray-700/75"
                    href="#"
                  >
                    Company History
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-700 dark:text-slate-400 transition hover:text-gray-700/75"
                    href="#"
                  >
                    Meet the Team
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-700 dark:text-slate-400 transition hover:text-gray-700/75"
                    href="#"
                  >
                    Employee Handbook
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-700 dark:text-slate-400 transition hover:text-gray-700/75"
                    href="#"
                  >
                    {" "}
                    Careers{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-900 dark:text-slate-300">
                Our Services
              </p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a
                    className="text-gray-700 dark:text-slate-400 transition hover:text-gray-700/75"
                    href="#"
                  >
                    Web Development
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-700 dark:text-slate-400 transition hover:text-gray-700/75"
                    href="#"
                  >
                    {" "}
                    Web Design{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-700 dark:text-slate-400 transition hover:text-gray-700/75"
                    href="#"
                  >
                    {" "}
                    Marketing{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-700 dark:text-slate-400 transition hover:text-gray-700/75"
                    href="#"
                  >
                    {" "}
                    Google Ads{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-900 dark:text-slate-300">
                Helpful Links
              </p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a
                    className="text-gray-700 transition dark:text-slate-400 hover:text-gray-700/75"
                    href="#"
                  >
                    {" "}
                    FAQs{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-700 dark:text-slate-400 transition hover:text-gray-700/75"
                    href="#"
                  >
                    {" "}
                    Support{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="group flex gap-1.5 justify-center lg:justify-start rtl:sm:justify-end"
                    href="#"
                  >
                    <span className="text-gray-700 transition dark:text-slate-400 group-hover:text-gray-700/75">
                      Live Chat
                    </span>

                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-600 opacity-75"></span>
                      <span className="relative inline-flex size-2 rounded-full bg-teal-500"></span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-900 dark:text-slate-300">
                Contact Us
              </p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a
                    className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 shrink-0 text-gray-900"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>

                    <span className="flex-1 text-gray-700 dark:text-slate-400">
                      john@doe.com
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 shrink-0 text-gray-900"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>

                    <span className="flex-1 text-gray-700 dark:text-slate-400">
                      0123456789
                    </span>
                  </a>
                </li>

                <li className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 shrink-0 text-gray-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>

                  <address className="-mt-0.5 flex-1 not-italic dark:text-slate-400 text-gray-700">
                    213 Lane, London, United Kingdom
                  </address>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-gray-500 dark:text-slate-400">
              <span className="block sm:inline">All rights reserved. </span>

              <a
                className="inline-block text-indigo-600 underline transition hover:text-teal-600/75"
                href="#"
              >
                Terms & Conditions
              </a>

              <span> &middot; </span>

              <a
                className="inline-block text-indigo-600 underline transition hover:text-teal-600/75"
                href="#"
              >
                Privacy Policy
              </a>
            </p>

            <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
              &copy; {year} Company Name
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
