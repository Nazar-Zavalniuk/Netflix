/* eslint-disable sort-keys */
import { IPlans } from "../types/types";

export const PLANS: IPlans = {
  basic: {
    shortInfo: { name: "Basic", videoQuality: "720p" },
    details: [
      ["Monthly price", "Free"],
      ["Video and sound quality", "Good"],
      ["Resolution", "720p (HD)"],
      ["Supported devices", "TV, computer, mobile phone, tablet"],
      ["Devices your household can watch at the same time", "1"],
      ["Download devices", "1"],
    ],
  },
  standard: {
    shortInfo: { name: "Standard", videoQuality: "1080p" },
    details: [
      ["Monthly price", "Free"],
      ["Video and sound quality", "Great"],
      ["Resolution", "1080p (Full HD)"],
      ["Supported devices", "TV, computer, mobile phone, tablet"],
      ["Devices your household can watch at the same time", "2"],
      ["Download devices", "2"],
    ],
  },
  premium: {
    shortInfo: { name: "Premium", videoQuality: "4K + HDR" },
    details: [
      ["Monthly price", "Free"],
      ["Video and sound quality", "Best"],
      ["Resolution", "4K (Ultra HD) + HDR"],
      ["Spatial audio (immersive sound)", "Included"],
      ["Supported devices", "TV, computer, mobile phone, tablet"],
      ["Devices your household can watch at the same time", "4"],
      ["Download devices", "6"],
    ],
  },
};
