import { useActiveSectionContext } from "../context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

export function useSectionInView(sectionName: SectionName) {
    // Using a rootMargin that collapses the viewport to a thin horizontal
    // line just below the fixed header (roughly where the header's bottom
    // edge sits) means "in view" now simply means "this section currently
    // spans that line". This works correctly regardless of how tall a
    // section is (unlike a `threshold` on the element's own height, which
    // can never be satisfied by sections taller than the viewport).
    const { ref, inView } = useInView({
        rootMargin: "-20% 0px -70% 0px",
    });
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection(sectionName);
        }
    }, [inView, setActiveSection, timeOfLastClick, sectionName]);

    return {
        ref,
    };
}
