import { OrganizationSwitcher, auth } from "@clerk/nextjs"

const OrganizationId = () => {
    const {userId,orgId} =auth()
  return (
    <div>OrganizationId : {orgId}
    <OrganizationSwitcher />
    </div>
  )
}

export default OrganizationId