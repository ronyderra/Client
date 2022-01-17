import Button from '@material-ui/core/Button';
import axios from "axios";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import WarningIcon from "@material-ui/icons/Warning";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Chip, { ChipProps } from "@material-ui/core/Chip";
import { red, blue } from "@material-ui/core/colors";
import { green, orange } from '@mui/material/colors';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import CheckIcon from '@mui/icons-material/Check';
import BlockIcon from '@mui/icons-material/Block';
import { MicNone } from '@material-ui/icons';

export const getSubmiterCollection = () => ([
  { id: 'Rony D', title: 'Rony D' },
  { id: 'Gal Y', title: 'Gal Y' },
  { id: 'Ben G', title: 'Ben G' },
  { id: 'Dany P', title: 'Dany P' },
  { id: 'Ohad O', title: 'Ohad O' },
])

export const getCurrencyCollection = () => ([
  { id: 'USD', title: 'USD' },
  { id: 'Euro', title: 'Euro' },
  { id: 'GBP', title: 'British pound' },
  { id: 'AUD', title: 'Australian dollar' },
  { id: 'CAD', title: 'Canadian dollar' },
  { id: 'CZK', title: 'Czech koruna (צכיה)' },
  { id: 'HKD', title: 'Hong Kong dollar' },
  { id: 'ILS', title: 'Israeli new shekel' },
  { id: 'YEN', title: 'Japanese yen' },
  { id: 'PLN', title: 'Poland Zloty' },
])
export const getCountryCollection = () => ([
  { id: 'Usa', title: 'United States' },
  { id: 'China', title: 'China' },
  { id: 'Canada', title: 'Canada' },
  { id: 'Czechia', title: 'Czechia' },
  { id: 'Hong Kong', title: 'Hong Kong SAR (China)' }, 
  { id: 'Sweden', title: 'Sweden' },
  { id: 'France', title: 'France' },
  { id: 'Germany', title: 'Germany' },
  { id: 'Australia', title: 'Australia' },
  { id: 'Spain', title: 'Spain' },
  { id: 'Italy', title: 'Italy' },
  { id: 'Japan', title: 'Japan' },
  { id: 'Brazil', title: 'Brazil' },
  { id: 'South Africa', title: 'South Africa' },
  { id: 'Switzerland', title: 'Switzerland' },
])


export const getReasonCollection = () => ([
  { id: 'הפקדה חדשה', title: 'הפקדה חדשה' },
  { id: 'שערוך שגוי', title: 'שערוך שגוי' },
  { id: 'סגירת חשבון', title: 'סגירת חשבון' },
  { id: 'המרה', title: 'המרה' },
  { id: 'טעות אנוש', title: 'טעות אנוש' },
  { id: 'מעבר מערכת', title: 'מעבר מערכת' },
])

export const getActionCollection = () => ([
  { id: 'Deposit', title: 'Deposit' },
  { id: 'Withdraw', title: 'Withdraw' },
])

export const platformItems = [
  { id: 'ib', title: 'IB' },
  { id: 'viewtrade', title: 'View Trade' },
]
//-----------------------------------------------------------------------------------------------------------------

export const ObplatformItems = [
  { id: 'B', title: 'Bloomberg' },
  { id: 'O', title: 'Oppenheimer' },
]

export const ObgetActionCollection = () => ([
  { id: 'Buy', title: 'Buy' },
  { id: 'Sell', title: 'Sell' },
])
export const OrderType = () => ([
  { id: 'LMT', title: 'LMT' },
  { id: 'MKT', title: 'MKT' },
])
export const Status = () => ([
  { id: 'Pending', title: 'Pending' },
  { id: 'Cancelled', title: 'Cancelled' },
  { id: 'Done', title: 'Done' },
])

export const ObColumn = [{
  field: 'submitter',
  headerName: 'submitter',
  width: 100,
  editable: false,
},
{
  field: 'accountName',
  headerName: 'clients Name',
  width: 120,
  editable: false,
},
{
  field: 'accountNumber',
  headerName: 'account',
  width: 100,
  editable: false,
},
{
  field: 'action',
  headerName: 'Action',
  width: 100,
  editable: false,
},
{
  field: 'quantity',
  headerName: 'Quantity',
  width: 100,
  editable: false,
}, {
  field: 'symbol',
  headerName: 'Symbol',
  width: 100,
  editable: false,
},
{
  field: 'orderType',
  headerName: 'Order Type',
  width: 100,
  editable: false,
},
{
  field: 'limitPrice',
  headerName: 'Execution Price',
  width: 140,
  editable: false,
},
{
  field: 'country',
  headerName: 'Country',
  width: 100,
  editable: false,
},
{
  field: 'platform',
  headerName: 'Platform',
  width: 90,
  editable: false,
},
{
  field: 'date',
  headerName: 'Date',
  width: 120,
  editable: false,
},
{
  field: 'status',
  headerName: 'Status',
  width: 80,
  editable: false,
  renderCell: (params) => {
    return <Chip size="small" {...getChipProps(params)} />;
  }
},
  //  {
  //   field: "submit",
  //   headerName: 'Submit',
  //   sortable: false,
  //   renderCell: (params) => {
  //     const onClick = async (e) => {
  //       const res = await axios.put("https://xnesdeskserver.herokuapp.com/api/order/" + params.id, { mode: 'cors' });
  //     };
  //     return <Button onClick={onClick}>Click</Button>;
  //   }
  // }
]

function OBgetChipProps(params) {
  if (params.value === "pending" || params.value === "Pending") {
    return {
      icon: <HourglassBottomIcon style={{ fill: orange[500] }} />,
      style: {
        backgroundColor: 'transparent'
      }
    };
  }
  else {
    return
    { params.value }
  }
}

//..............................................................................................


export const Systems = () => ([
  { id: 'IB', title: 'IB' },
  { id: 'VT', title: 'VT' },
  { id: 'SP', title: 'SP' },
])
export const Files = () => ([
  { id: 'YES', title: 'YES' },
  { id: 'NO', title: 'NO' },
  { id: 'לא רלוונטי', title: 'לא רלוונטי' },
])

//---------------------------------------------------------------------------------------
export const BuyingPowerColomn = [{
  field: 'accountNumber',
  headerName: 'account Number',
  width: 100,
  editable: false,
}, {
  field: 'fullName',
  headerName: 'full Name',
  width: 100,
  editable: false,
},
{
  field: 'amount',
  headerName: 'amount',
  width: 100,
  editable: false,
}, {
  field: 'currency',
  headerName: 'currency',
  width: 100,
  editable: false,
},
{
  field: 'action',
  headerName: 'action',
  width: 100,
  editable: false,
}, {
  field: 'platform',
  headerName: 'platform',
  width: 100,
  editable: false,
},
{
  field: 'unumber',
  headerName: 'unumber',
  width: 100,
  editable: false,
}, {
  field: 'sheled',
  headerName: 'sheled',
  width: 100,
  editable: false,
},
{
  field: 'submitter',
  headerName: 'submitter',
  width: 100,
  editable: false,
}, {
  field: 'reason',
  headerName: 'reason',
  width: 100,
  editable: false,
}, {
  field: 'date',
  headerName: 'date',
  width: 100,
  editable: false,
},
{
  field: 'status',
  headerName: 'status',
  width: 100,
  editable: false,
  renderCell: (params) => {
    return <Chip size="small" {...getChipProps(params)} />;
  }
},
{
  field: "submit",
  headerName: 'submit',
  sortable: false,
  width: 100,
  renderCell: (params) => {
    const onClick = async (e) => {
      const res = await axios.put("https://xnesdeskserver.herokuapp.com/api/buyingPowerList/" + params.id, { mode: 'cors' });
    };
    return <Button onClick={onClick}>submit</Button>;
  }
}
]

//-----------------------------------------------------------------------------------

export const CommissionRange = () => ([
  { id: '100-500₪', title: '100-500₪' },
  { id: '500-1000₪', title: '500-1000₪' },
  { id: '1000-1500₪', title: '1000-1500₪' },
  { id: '1500-2000₪', title: '1500-2000₪' },
  { id: '2000-2500₪', title: '2000-2500₪' },
  { id: '3000-3500₪', title: '3000-3500₪' },
  { id: '4000-4500₪', title: '4000-4500₪' },
  { id: '5000 +', title: '5000 +' },
])

export const CommissionStkPath = () => ([
  { id: 'לא רלוונטי', title: 'לא רלוונטי' },
  { id: '5$ + 0.01$', title: '5$ + 0.01$' },
  { id: '4.5$ + 0.01$', title: '4.5$ + 0.01$' },
  { id: '4.0$ + 0.01$', title: '4.0$ + 0.01$' },
  { id: '8.5$ + 0.01$', title: '8.5$ + 0.01$' },
  { id: '8$ + 0.01$', title: '8$ + 0.01$' },
  { id: '7.5$ + 0.01$', title: '7.5$ + 0.01$' },
  { id: '9$ FIX', title: '9$ FIX' },
])
export const CommissionOptPath = () => ([
  { id: 'לא רלוונטי', title: 'לא רלוונטי' },
  { id: '7.5$ + 2.5$', title: '7.5$ + 2.5$' },
  { id: '7.0$ + 2.5$', title: '7.0$ + 2.5$' },
  { id: '6.5$ + 2.5$', title: '6.5$ + 2.5$' },
])

export const ComPlatformItems = [
  { id: 'ib', title: 'IB' },
  { id: 'vt', title: 'VT' },
  { id: 'sp', title: 'SP' },
]

export const getComReasonCollection = () => ([
  { id: 'מתכנן עלייה בפעילות', title: 'מתכנן עלייה בפעילות' },
  { id: 'פיצוי', title: 'פיצוי' },
  { id: ' ביקש יפה', title: ' ביקש יפה' },
  { id: 'סוחר בופציות', title: 'סוחר באופציות' },
  { id: "סוחר בחוזים", title: "סוחר בחוזים" },
  { id: " הוזלה בריבית", title: " הוזלה בריבית" },
  { id: " סוחר בני-ז", title: " סוחר בני-ז" },
])

export const commissionColumn = [{
  field: 'id',
  headerName: 'ID',
  width: 1,
  editable: false,
}, {
  field: 'submitter',
  headerName: 'submitter',
  width: 100,
  editable: false,
}, {
  field: 'accountNumber',
  headerName: 'account Number',
  width: 90,
  editable: false,
},
{
  field: 'commissionAmount',
  headerName: 'commission',
  width: 100,
  editable: false,
},
{
  field: 'currentStkCom',
  headerName: 'Stocks',
  width: 100,
  editable: false,
},
{
  field: 'currentOptCom',
  headerName: 'Options',
  width: 100,
  editable: false,
},
{
  field: 'platform',
  headerName: 'platform',
  width: 100,
  editable: false,
}, {
  field: 'date',
  headerName: 'date',
  width: 100,
  editable: false,
},
{
  field: 'reason',
  headerName: 'reason',
  width: 150,
  editable: false,
},
{
  field: 'status',
  headerName: 'status',
  width: 100,
  editable: false,
  renderCell: (params) => {
    return <Chip size="small" {...getChipProps(params)} />;
  }
},
{
  field: 'newStkCom',
  headerName: 'Stock Com',
  width: 100,
  editable: false,
},
{
  field: 'newOptCom',
  headerName: 'Option Com',
  width: 105,
  editable: false,
},
{
  field: 'newIntCom',
  headerName: 'Intrest Com',
  width: 100,
  editable: false,
},
]

export const ApprovedformItems = [
  { id: 'approved', title: 'Approved' },
  { id: 'not approved', title: 'Not Approved' },
]

export const masterNotesCollection = () => ([
  { id: 'מתכנן עלייה בפעילות', title: 'נא לעדכן לקוח' },
  { id: 'פיצוי', title: 'נא לעדכן בסי אר אמ' },
  { id: ' ביקש יפה', title: 'נא לבקש אישור מדרור' },
])

export const IntrestCommission = () => ([
  { id: '6.5% + fed', title: '6.5 + fed' },
  { id: '5.5%$ + fed', title: '5.5%$ + fed' },
  { id: 'לא רלוונטי', title: 'לא רלוונטי' },

])


//trackingForm -------------------------------------

export const getTrackingReasonCollection = () => ([
  { id: 'לא מרוצה מהמערכת', title: 'לא מרוצה מהמערכת' },
  { id: 'עמלות יקרות', title: 'עמלות יקרות' },
  { id: 'עקב תקלה', title: 'עקב תקלה' },
  { id: 'אופציות', title: 'אופציות' },
  { id: 'אשראי', title: 'אשראי' },
  { id: 'OTC', title: 'OTC' },
])

export const bool = [
  { id: 'YES', title: 'YES' },
  { id: 'NO', title: 'NO' },
]

function getChipProps(params) {
  if (params.value === "pending" || params.value === "Pending") {
    return {
      icon: <HourglassBottomIcon style={{ fill: orange[500] }} />,
      style: {
        backgroundColor: 'transparent'
      }
    };
  }
  if (params.value === "done" || params.value === "approved" || params.value === "Done") {
    return {
      icon: <CheckIcon style={{ fill: blue[500] }} />,
      style: {
        backgroundColor: 'transparent'
      }
    };
  }
  else {
    return {
      icon: <BlockIcon style={{ fill: red[500] }} />,
      style: {
        backgroundColor: 'transparent'
      }
    };
  }
}


export const trackingColum = [{
  field: 'id',
  headerName: 'ID',
  width: 1,
  editable: false,
},
{
  field: 'date',
  headerName: 'date',
  width: 90,
  editable: false,
},
{
  field: 'submitter',
  headerName: 'submitter',
  width: 100,
  editable: false,
}, {
  field: 'accountNumber',
  headerName: 'AC Number',
  width: 100,
  editable: false,
},
{
  field: 'fromm',
  headerName: 'From',
  width: 60,
  editable: false,
},
{
  field: 'too',
  headerName: 'To',
  width: 50,
  editable: false,
},
{
  field: 'paperSent',
  headerName: 'Papers sent?',
  width: 110,
  editable: false,
},
{
  field: 'paperSigned',
  headerName: 'Papers signed?',
  width: 125,
  editable: false,
},
{
  field: 'accountOpend',
  headerName: 'account Opend?',
  width: 130,
  editable: false,
},
{
  field: 'stocksTransferd',
  headerName: 'STK Transferd?',
  width: 125,
  editable: false,
},
{
  field: 'cashUpdated',
  headerName: 'Chash Updated?',
  width: 132,
  editable: false,
},
{
  field: 'currentSheled',
  headerName: 'sheled?',
  width: 80,
  editable: false,
},
{
  field: 'status',
  headerName: 'status',
  width: 80,
  editable: false,
  renderCell: (params) => {
    return <Chip size="small" {...getChipProps(params)} />;
  }
},
]

export const sheledCollection = () => ([
  { id: 'intPH-Hul', title: 'intPH-Hul' },
  { id: 'intPH-Hul2', title: 'intPH-Hul2' },
  { id: 'Int-Mri', title: 'Int-Mri' },
  { id: 'Int-Mri2', title: 'Int-Mri2' },
])
