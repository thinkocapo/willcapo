package com.willcapo.main.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

import com.willcapo.main.domain.enumeration.Behavior;

/**
 * A Card.
 */
@Entity
@Table(name = "card")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Card implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "image")
    private String image;

    @Column(name = "title")
    private String title;

    @Column(name = "description")
    private String description;

    @Column(name = "jhi_date")
    private LocalDate date;

    @Enumerated(EnumType.STRING)
    @Column(name = "behavior")
    private Behavior behavior;

    @Column(name = "data")
    private String data;

    @OneToMany(mappedBy = "card")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Tag> tags = new HashSet<>();
    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getImage() {
        return image;
    }

    public Card image(String image) {
        this.image = image;
        return this;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getTitle() {
        return title;
    }

    public Card title(String title) {
        this.title = title;
        return this;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public Card description(String description) {
        this.description = description;
        return this;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDate getDate() {
        return date;
    }

    public Card date(LocalDate date) {
        this.date = date;
        return this;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public Behavior getBehavior() {
        return behavior;
    }

    public Card behavior(Behavior behavior) {
        this.behavior = behavior;
        return this;
    }

    public void setBehavior(Behavior behavior) {
        this.behavior = behavior;
    }

    public String getData() {
        return data;
    }

    public Card data(String data) {
        this.data = data;
        return this;
    }

    public void setData(String data) {
        this.data = data;
    }

    public Set<Tag> getTags() {
        return tags;
    }

    public Card tags(Set<Tag> tags) {
        this.tags = tags;
        return this;
    }

    public Card addTag(Tag tag) {
        this.tags.add(tag);
        tag.setCard(this);
        return this;
    }

    public Card removeTag(Tag tag) {
        this.tags.remove(tag);
        tag.setCard(null);
        return this;
    }

    public void setTags(Set<Tag> tags) {
        this.tags = tags;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Card card = (Card) o;
        if (card.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), card.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Card{" +
            "id=" + getId() +
            ", image='" + getImage() + "'" +
            ", title='" + getTitle() + "'" +
            ", description='" + getDescription() + "'" +
            ", date='" + getDate() + "'" +
            ", behavior='" + getBehavior() + "'" +
            ", data='" + getData() + "'" +
            "}";
    }
}
