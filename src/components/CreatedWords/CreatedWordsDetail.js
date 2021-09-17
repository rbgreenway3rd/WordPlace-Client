// import React, { useContext, useEffect, useState } from "react";
// import { CreatedWordsContext } from "./CreatedWordsProvider";
// import "./CreatedWords.css";
// import { useHistory, useParams } from "react-router-dom";

// export const CreatedWordsDetail = () => {
//   const { getCreatedWords, createdwords } = useContext(CreatedWordsContext);

//   // const { getCreatedWordsById, releaseCreatedWords  } = useContext(CreatedWordsContext)

//   // const [createdwords, setCreatedWords] = useState({})

//   const { createdwordId } = useParams(); // url of rareUsers

//   useEffect(() => {
//     getCreatedWords(createdwordId);
//   }, []);
//   // useEffect(() => {
//   //     if (rareUserId) {
//   //         getCreatedWordsById(parseInt(getCreatedWordsById)).then((rareUserObj) => {
//   //             setCreatedWords(rareUserObj)
//   //         });
//   //     } else { setCreatedWords(createdwords) }
//   // }, [rareUserId]);

//   const history = useHistory();

//   // const handleUserRelease = () => {
//   //     //if user.id === 1
//   //     // return all the normal stuff you have so far
//   //     //else return all inputs with readOnly
//   //     releaseCreatedWords(createdwords.id)
//   //         .then(() => {
//   //             history.push("/createdwords");
//   //         })
//   // }

//   return (
//     <>
//       <div>
//         <h1>{createdword.word}</h1>
//         <div>
//           Author: {createdword.user?.first_name} {createdword.user?.last_name}
//         </div>
//         <img src={createdword.profile_image_url} alt="ProfilePic" />
//         <div>Username: {createdword.user?.username}</div>
//         <div>Email: {createdword.user?.email}</div>
//       </div>
//     </>
//   );
// };
