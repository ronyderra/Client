import BorderColorIcon from '@mui/icons-material/BorderColor';
import EarbudsIcon from '@mui/icons-material/Earbuds';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CalculateIcon from '@mui/icons-material/Calculate';
import Notifications from "@material-ui/icons/Notifications";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import CorpActionsPage from "./views/CorpActions/CorpActions.js";
import Calculators from "./views/Calc/Calculators.js";
import TableList from "./views/TimeZone/TimeZone.js";
import Typography from "./views/Typography/Typography.js";
import Bo from "./views/B&O/Bo";
import BuyingPower from "./views/BuyingPower/BuyingPower.js";
import Commission from "./views/Commission/Commission.js";
import CommissionMaterComp from "./views/CommissionMaster/CommissionMaster";
import TrackingSystems from "./views/TrackingSystems/TrackingSystems";
import TrackingMaster from "./views/TrackingMaster/trackingMaster";


const dashboardRoutes = [
  // {
  //   path: "/corpActions",
  //   name: "Corp Actions",
  //   icon: CorporateFareIcon,
  //   component: CorpActionsPage,
  //   layout: "/BrokerTools",
  // },
  // {
  //   path: "/typography",
  //   name: "News",
  //   icon: NewspaperIcon,
  //   component: Typography,
  //   layout: "/BrokerTools",
  // },

  {
    path: "/B&O",
    name: "B & O",
    icon: BorderColorIcon,
    component: Bo,
    layout: "/BrokerTools",
  },
  {
    path: "/TrackingSystems",
    name: "Tracking Systems",
    icon: EarbudsIcon,
    component: TrackingSystems,
    layout: "/BrokerTools",
  },
  {
    path: "/BuyingPower",
    name: "Buying Power",
    icon: MonetizationOnIcon,
    component: BuyingPower,
    layout: "/BrokerTools",
  },
  {
    path: "/Commission",
    name: "Commission",
    icon: Notifications,
    component: Commission,
    layout: "/BrokerTools",
  },
  {
    path: "/CommissionMaster",
    name: "Commission Master",
    icon: CalculateIcon,
    component: CommissionMaterComp,
    layout: "/BrokerTools",
  },
  {
    path: "/TrackingMaster",
    name: "Tracking Master",
    icon: EarbudsIcon,
    component: TrackingMaster,
    layout: "/BrokerTools",
  },
  {
    path: "/timeZone",
    name: "Time Zone",
    icon: AccessTimeIcon,
    component: TableList,
    layout: "/BrokerTools",
  },
  {
    path: "/Calc",
    name: "Calculators",
    icon: CalculateIcon,
    component: Calculators,
    layout: "/BrokerTools",
  },
  // {
  //   path: "/upgrade-to-pro",
  //   name: "Upgrade To PRO",
  //   icon: Unarchive,
  //   component: UpgradeToPro,
  //   layout: "/BrokerTools",
  // },

];

export default dashboardRoutes;
