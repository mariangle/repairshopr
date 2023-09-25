"use client"

import { useEffect } from "react"

export const Test = () => {
    useEffect(() => {
        const FetchData = async () => {
          try {
            const response = await fetch("https://wwwcirbitdk.repairshopr.com/api/v1/tickets", {
              headers: {
                Authorization: `Bearer Teec2ed7678c363492-37d177438541b14a9fe070276c41e86e`,
              },
            });
        
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
        
            const data = await response.json();
            console.log(data)
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        } 
        FetchData();
      }, [])
    return (
        <div>

        </div>
    )
}