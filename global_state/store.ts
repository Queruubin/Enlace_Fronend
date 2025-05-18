import { create } from "zustand"

type Role = "admin" | "estudiante" | "profesor"

interface AdminPermissions {
  canEditUsers: boolean
  canViewReports: boolean
  canManageCourses: boolean
}

interface GlobalState {
  role: Role
  permissions: AdminPermissions | null
  setRole: (role: Role) => void
  setPermissions: (permissions: AdminPermissions | null) => void
}

const useStore = create<GlobalState>((set) => ({
  role: "estudiante",
  permissions: null,
  setRole: (role) =>
    set((state) => ({
      ...state,
      role,
      permissions: role === "admin" ? state.permissions : null,
    })),
  setPermissions: (permissions) =>
    set((state) =>
      state.role === "admin" ? { ...state, permissions } : state
    ),
}))

export default useStore
