import {
    ArrowDownIcon,
    ArrowRightIcon,
    ArrowUpIcon,
    CheckCircledIcon,
    CircleIcon,
    CrossCircledIcon,
    QuestionMarkCircledIcon,
    StopwatchIcon,
  } from "@radix-ui/react-icons"

export const types = [
  {
      value: "macbook check-in",
      label: "Macbook check-in",
  },
  {
      value: "salg af produkt",
      label: "Salg af produkt",
  },  
  {
    value: "telefon check-in",
    label: "Telefon check-in",
  },  
  {
    value: "ipad/tablet check-in",
    label: "iPad/Tablet check-in",
  },  
]

export const issues = [
    {
      value: "Aabenraa",
      label: "Aabenraa",
    },  
    {
      value: "Odense",
      label: "Odense",
    },
    {
      value: "Other",
      label: "Andet",
    },
]

export const statuses = [
  {
    value: "New",
    label: "Ny",
    icon: CircleIcon,
  },
  {
    value: "Klar til afregning",
    label: "Afventer afregning",
    icon: StopwatchIcon,
  },
  {
    value: "Afventer Del",
    label: "Afventer Del",
    icon: StopwatchIcon,
  },
  {
    value: "Customer Reply",
    label: "Customer Reply",
    icon: QuestionMarkCircledIcon,
  },
  {
    value: "Resolved",
    label: "Løst",
    icon: CheckCircledIcon,
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: CrossCircledIcon,
  },
]

export const priorities = [
  {
    label: "Low",
    value: "low",
    icon: ArrowDownIcon,
  },
  {
    label: "Medium",
    value: "medium",
    icon: ArrowRightIcon,
  },
  {
    label: "High",
    value: "high",
    icon: ArrowUpIcon,
  },
]