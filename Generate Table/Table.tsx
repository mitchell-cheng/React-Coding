import React, { useState } from 'react';

export default function Table({ rows, columns }) {
  return (
    <table>
      <tbody>
        {Array.from({ length: rows }, () => 0).map(
          (_, row) => (
            <tr key={row}>
              {Array.from({ length: columns }, () => 0).map(
                (_, col) => (
                  <td key={col}>
                    {col % 2 === 0
                      ? rows * col + (row + 1)
                      : rows * (col + 1) - row}
                  </td>
                ),
              )}
            </tr>
          ),
        )}
      </tbody>
    </table>
  );
}