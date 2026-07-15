// Web3Forms — serverless form delivery for the static site.
// Submissions are emailed straight to the NGO inbox; no backend required.
// Get a free Access Key at https://web3forms.com (no account/backend needed).

// Web3Forms access keys are public identifiers (they ship in the client HTML),
// so it is safe to keep a default here. Override it per-environment with the
// NEXT_PUBLIC_WEB3FORMS_KEY env var / GitHub secret if you rotate the key.
export const WEB3FORMS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY || 'e85befba-d78f-4306-95f0-46547a4a2dd7'

export type Web3FormsResult = { success: boolean; message?: string }

export async function submitForm(data: Record<string, unknown>): Promise<Web3FormsResult> {
  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: WEB3FORMS_KEY,
      ...data,
    }),
  })
  return response.json()
}
