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
      value: "odense",
      label: "Odense",
    },  
    {
      value: "aabenraa",
      label: "Aabenraa",
    },  
]

export const statuses = [
  {
    value: "backlog",
    label: "Backlog",
    icon: QuestionMarkCircledIcon,
  },
  {
    value: "todo",
    label: "Todo",
    icon: CircleIcon,
  },
  {
    value: "in progress",
    label: "In Progress",
    icon: StopwatchIcon,
  },
  {
    value: "resolved",
    label: "Resolved",
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