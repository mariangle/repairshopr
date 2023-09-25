"use client"

import { useEffect, useState } from "react"

export const FormattedDate = ({ date }: { date: string }) => {

    const [isMounted, setIsMounted ]= useState<boolean>(false);
    useEffect(() => {
        setIsMounted(true);
    }, [])

    if (!isMounted) return null;

  return (
    <span>{date}</span>
  )
}