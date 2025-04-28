import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function SvgLogo() {
  return (
    <Div>
      <NavLink to="/">
        <svg height="100px" width="100px" viewBox="0 0 80 80">
          {/* <motion.path  d="m10 10 v80 v-40 l40 -40 l-38 40 Q20 80, 60 80 v-40 h-20" */}
          <motion.path
            d="m10 10 v60 v-30 l20 -20 l-18 20 Q20 60, 40 60 v-20 h-10"
            stroke="#2bd576"
            strokeWidth="6"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>
      </NavLink>
    </Div>
  );
}

export default SvgLogo;

const Div = styled.div`
  /* svg {
    width: fit-content;
  } */
`;

// import React, { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";
// import styled from "styled-components";

// function SvgLogo() {
//   const pathRef = useRef(null);
//   const [viewBox, setViewBox] = useState("0 0 100 100");

//   useEffect(() => {
//     if (pathRef.current) {
//       const bbox = pathRef.current.getBBox();
//       setViewBox(`${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`);
//     }
//   }, []);

//   return (
//     <Div>
//       <svg height="100px" width="100px" viewBox={viewBox}>
//         <motion.path
//           ref={pathRef}
//           d="m10 10 v80 v-40 l40 -40 l-38 40 Q20 80, 60 80 v-40 h-20"
//           stroke="white"
//           strokeWidth="6"
//           fill="none"
//           initial={{ pathLength: 0 }}
//           animate={{ pathLength: 1 }}
//           transition={{ duration: 2, ease: "easeInOut" }}
//         />
//       </svg>
//     </Div>
//   );
// }

// export default SvgLogo;

// const Div = styled.div`
//   svg {
//     width: fit-content;
//   }
// `;
