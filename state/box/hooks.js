// import { useWeb3React } from "@web3-react/core";
// import BigNumber from "bignumber.js";
// import { ethers } from "ethers";
// import { useCallWithGasPrice } from "hooks/useCallWithGasPrice";
// import { useBoxStoreContract } from "hooks/useContract";
// import { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { useAppDispatch } from "state";
// import { State } from "state/types";
// import { getBalanceNumber, formatBigNumber } from "utils/formatBalance";
// import { setBoxInfo } from ".";
// import { BOX_TYPE } from 'config';

// export const useBox = () => {
//   const { account } = useWeb3React();
//   const contract = useBoxStoreContract();
//   const dispatch = useAppDispatch();
//   const { callWithGasPrice } = useCallWithGasPrice();

//   const checkAllowance = async (
//     tokenContract: any,
//     contractAddress: string
//   ) => {
//     const res = await tokenContract.allowance(account, contractAddress);

//     const allowance = new BigNumber(res.toString());

//     return allowance.isEqualTo(new BigNumber(0));
//   };

//   const handleApprove = (tokenContract: any, contractAddress: string) => {
//     return callWithGasPrice(tokenContract, "approve", [
//       contractAddress,
//       ethers.constants.MaxUint256,
//     ]);
//   };

//   useEffect(() => {
//     const fetchMarket = async () => {
//       try {
//         // 2: common, 3, 1(for 1): ultimate
//         // ULTIMATE BOX
//         const totalUltimate = await contract.boxTypeToTotalBoxAvailable(BOX_TYPE.ultimateBox);
//         const priceUltimate = await contract.boxTypeToPrice(BOX_TYPE.ultimateBox, process.env.REACT_APP_BUSD_ADDRESS);
//         const limitUltimate = await contract.boxTypeToLimitPerPurchase(BOX_TYPE.ultimateBox);

//         // COMMON BOX
//         const totalCommon = await contract.boxTypeToTotalBoxAvailable(BOX_TYPE.commonBox);
//         const priceCommon = await contract.boxTypeToPrice(BOX_TYPE.commonBox, process.env.REACT_APP_BUSD_ADDRESS);
//         const limitCommon = await contract.boxTypeToLimitPerPurchase(BOX_TYPE.commonBox);

//         const boxInfoUltimate = {
//           boxAvailable: parseInt(totalUltimate.toString()),
//           price: getBalanceNumber(priceUltimate.toString()),
//           limitPerPurchase: parseInt(limitUltimate.toString()),
//         }

//         const boxInfoCommon = {
//           boxAvailable: parseInt(totalCommon.toString()),
//           price: getBalanceNumber(priceCommon.toString()),
//           limitPerPurchase: parseInt(limitCommon.toString()),
//         }

//         dispatch(setBoxInfo({ boxInfoCommon, boxInfoUltimate }));
//       } catch (error) {
//         console.log('error :>> ', error);
//       }
//     };

//     if (account) {
//       fetchMarket();
//     }
//   }, [account, contract]);

//   return { checkAllowance, handleApprove };
// };

// export const useBoxState = () => {
//   const box = useSelector((state: State) => state.box);

//   return box;
// };
