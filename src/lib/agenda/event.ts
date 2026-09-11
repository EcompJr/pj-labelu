
type Status = "open" | "ongoing" | "finished"

const localizedDate = (date: Date): string => 
  date.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
})

type Props = {
    title: string,
    category: string,
    agenda: string,
    start: Date,
    end: Date | null | undefined,
    time: string | null | undefined,
    local: string | null | undefined,
}

class LabeluEvent {
    readonly title: string
    readonly category: string
    readonly agenda: string
    private start: Date
    private end: Date | null
    readonly time: string | null
    readonly local: string | null

    constructor(props: Props) {
        this.title = props.title
        this.category = props.category
        this.agenda = props.agenda
        this.start = props.start
        this.end = props.end ?? null
        this.time = props.time ?? null
        this.local = props.local ?? null
    }

    get date(): [start: string, end: string] {
        const start = this.start.toISOString()
        const end = this.end ? this.end.toISOString() : start
        return [start, end]
    }

    get localDate(): [start: string, end: string] {
        const [start, end] = this.date.map((date) => localizedDate(new Date(date)))
        return [start, end]
    }

    get status(): Status {
        const now = new Date()
        const isFuture = (date: Date, now: Date) => date > now
        const isPast = (date: Date, now: Date) => date < now

        if (isFuture(this.end ?? this.start, now)) {
            return "open"
        } else if (isPast(this.start, now) && (!this.end || isFuture(this.end, now))) {
            return "finished"
        } else {
            return "ongoing"
        }
    }
}

export { LabeluEvent, type Status }
