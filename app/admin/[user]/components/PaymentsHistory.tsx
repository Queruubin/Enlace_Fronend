"use client"

import { Button } from "@mui/joy"
import { useState } from "react"

export default function PaymentsHistory() {
  const [payments, setPayments] = useState<string[] | null>(null)
  return (
    <div className="flex flex-col items-start w-full h-full bg-white px-2">
      <h1 className="text-2xl font-bold mb-4">Historial de Pagos</h1>
      <p className="text-gray-600 mb-4">
        Aquí puedes ver el historial de pagos.
      </p>
      {payments ? (
        <div className="overflow-x-auto w-full">
          <table className="min-w-full border-collapse border border-gray-200">
            <thead>
              <tr>
                <th className="border border-gray-200 px-4 py-2">Fecha</th>
                <th className="border border-gray-200 px-4 py-2">Monto</th>
                <th className="border border-gray-200 px-4 py-2">
                  Método de Pago
                </th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment) => (
                <tr key={payment.id}>
                  <td className="border border-gray-200 px-4 py-2">
                    {payment.date}
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    {payment.amount}
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    {payment.method}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <Button variant="solid">Ver historial de pagos</Button>
      )}
    </div>
  )
}
