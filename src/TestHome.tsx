// import React from "react";
// import { KorapayButton } from "react-korapay";

// const TestHome = () => {
//   const config = {
//     public_key: "pk_test_bX5N2BHyihhgoS8ngnHsSgLXQN85XMLrTxL8JKSu",
//     amount: 2000,
//     customer: {
//       name: "John doe",
//       email: "johndoe@gmail.com",
//     },
//     narration: "Testing korapay",
//   };

//   const koraPay = {
//     ...config,
//     onClose: () => {},
//     onSuccess: () => {},
//     text: "Pay with korapay!",
//   };

//   return (
//     <div className="App">
//       <h1>React Wrapper for Korapay collections</h1>
//       <h2>Check it out!</h2>

//       <div>
//         <KorapayButton {...koraPay} />
//       </div>
//     </div>
//   );
// };

// export default TestHome;

// import React from "react";
// import { KorapayButton } from "react-korapay";

// const TestHome = () => {
//   const config = {
//     public_key: "pk_test_bX5N2BHyihhgoS8ngnHsSgLXQN85XMLrTxL8JKSu",
//     amount: 2000,
//     customer: {
//       name: "John doe",
//       email: "johndoe@gmail.com",
//     },
//     narration: "Testing korapay",
//   };

//   const korapay = {
//     ...config,
//     onClose: () => {},
//     onSuccess: () => {},
//     text: "Pay with korapay!",
//   };

//   return (
//     <div>
//       <div className="App">
//         <h1>React Wrapper for Korapay collections</h1>
//         <h2>Check it out!</h2>

//         <div>
//           <KorapayButton {...korapay} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestHome;

import React from "react";
import { KorapayButton } from "react-korapay";

const TestHome = () => {
  const config = {
    public_key: "pk_test_bX5N2BHyihhgoS8ngnHsSgLXQN85XMLrTxL8JKSu",
    amount: 30000,
    narration: "Start payment now",
    customer: {
      name: "Peter",
      email: "peter@gmail.com",
    },
  };

  const koraPay = {
    ...config,
    text: "Start Payment",
    onSuccess: () => {},
    onClose: () => {},
  };

  return (
    <div>
      <div>
        <KorapayButton {...koraPay} />
      </div>
    </div>
  );
};

export default TestHome;
