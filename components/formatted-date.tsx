"use client"

import { useEffect, useState } from "react"
import { format } from "@/lib/format"

export const FormattedDate = ({ date }: { date: string }) => {

    const [isMounted, setIsMounted ]= useState<boolean>(false);
    useEffect(() => {
        setIsMounted(true);
    }, [])

    if (!isMounted) return null;

  return (
    <span>{format(date)}</span>
  )
}